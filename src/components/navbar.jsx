import Logo from "../assets/Kasya_Store.png";
import _ from "lodash";
import React from "react";
import { allproduk } from "../data/index";
import { Link } from "react-router-dom";
import { GridColumn, Search, Grid } from "semantic-ui-react";

const source = allproduk;

const initialState = {
  loading: false,
  results: [],
  value: "",
};

function exampleReducer(state, action) {
  switch (action.type) {
    case "CLEAN_QUERY":
      return initialState;
    case "START_SEARCH":
      return { ...state, loading: true, value: action.query };
    case "FINISH_SEARCH":
      return { ...state, loading: false, results: action.results };
    case "UPDATE_SELECTION":
      return { ...state, value: action.selection };

    default:
      throw new Error();
  }
}

const Navbar = () => {
  const [state, dispatch] = React.useReducer(exampleReducer, initialState);
  const { loading, results, value } = state;
  const [oldValue, setOldValue] = React.useState("");

  const timeoutRef = React.useRef();
  const handleSearchChange = React.useCallback(
    (e, data) => {
      clearTimeout(timeoutRef.current);
      setOldValue(value);
      dispatch({ type: "START_SEARCH", query: data.value });

      timeoutRef.current = setTimeout(() => {
        if (data.value.length === 0) {
          dispatch({ type: "CLEAN_QUERY" });
          return;
        }

        const re = new RegExp(_.escapeRegExp(data.value), "i");
        const isMatch = (result) => re.test(result.title);

        // Limit to the first 10 matching results
        // const filteredResults = _.take(_.filter(source, isMatch), 10);
        const filteredResults = _.take(
          _.filter(source, isMatch).map((result) => ({
            title: result.title,
            price: result.price, // Add price
            description: result.description, // Add description
            href: `/produk/${result.slug}`, // Use template literal to dynamically set the href
          })),
          10
        );

        dispatch({
          type: "FINISH_SEARCH",
          results: filteredResults,
        });
      }, 300);
    },
    [value]
  );
  React.useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className="sticky top-0 z-10 w-full">
      <div className="flex items-center justify-between w-full px-4 py-1 bg-white shadow sm:py-2 sm:gap-4 sm:px-8">
        {/* Logo */}
        <a href={"/"} className="items-center hidden sm:flex sm:mr-10">
          <img src={Logo} alt="logo" className="w-8 h-8 sm:w-16 sm:h-16" />
          <p className="hidden text-2xl font-extrabold text-black sm:block">
            E-Commerce
          </p>
        </a>

        {/* Search input */}
        <div className="w-1/2 flex items-center justify-center sm:w-[40%] p-1">
          <Grid>
            <GridColumn width={16}>
              <Search
                loading={loading}
                placeholder="Cari Produk..."
                onResultSelect={(e, data) =>
                  dispatch({
                    type: "UPDATE_SELECTION",
                    selection: data.result.title,
                  })
                }
                onSearchChange={handleSearchChange}
                results={results}
                value={value}
              />
            </GridColumn>
          </Grid>

          <div className="items-center justify-center hidden gap-6 mx-3 sm:flex">
            {/* Button Keranjang */}
            <Link to="/keranjang">
              <div className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-8 h-8 bi bi-cart4"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
                </svg>

                <span className="absolute top-0 right-0 px-1 text-xs text-white bg-red-500 rounded-full">
                  1 {/* Jumlah item di keranjang */}
                </span>
              </div>
            </Link>

            {/* Button Wishlist */}
            <Link to="/wishlist">
              <div className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-8 h-8 bi bi-bag-heart-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.5 4v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m0 6.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132" />
                </svg>

                <span className="absolute top-0 right-0 px-1 text-xs text-white bg-red-500 rounded-full">
                  1 {/* Jumlah item di wishlist */}
                </span>
              </div>
            </Link>
          </div>
        </div>

        {/* Button section */}
        <div className="flex items-center justify-center text-gray-700">
          {/* Button Login */}
          <a
            href="#login"
            className="px-2 py-1.5 text-xs font-medium text-white bg-blue-700 rounded-lg sm:py-2 sm:text-sm sm:px-5 hover:bg-blue-800 focus:ring-2 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none"
          >
            Masuk
          </a>

          {/*  */}
          <div className="flex md:order-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
