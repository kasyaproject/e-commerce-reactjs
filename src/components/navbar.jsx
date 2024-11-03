import Logo from "../assets/Kasya_Store.png";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 w-full">
      <div className="flex items-center justify-between w-full px-4 py-1 bg-white shadow sm:py-2 sm:gap-4 sm:px-8">
        {/* Logo */}
        <a href={"/"} className="flex items-center sm:mr-10">
          <img src={Logo} alt="logo" className="w-8 h-8 sm:w-16 sm:h-16" />
          <p className="hidden text-2xl font-extrabold text-black sm:block">
            E-Commerce
          </p>
        </a>

        {/* Search input */}
        <div className="w-1/2 sm:w-[40%] p-1">
          <form className="w-full mx-auto">
            <div className="flex">
              <label
                htmlFor="search-dropdown"
                className="mb-2 text-sm font-medium text-gray-900 sr-only"
              >
                Cari di aplikasi
              </label>

              {/* Button Kategori */}
              <button
                id="dropdown-button"
                data-dropdown-toggle="dropdown"
                className="flex-shrink-0 z-10 hidden sm:inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:outline-none"
                type="button"
              >
                All categories{" "}
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              {/* Dropdwon Kategori */}
              <div
                id="dropdown"
                className="z-10 hidden w-full bg-white divide-y divide-gray-100 rounded-b-lg shadow"
              >
                <div className="flex justify-center w-full px-10 py-1 h-96">
                  <div className="flex w-4/5 px-6 overflow-y-auto bg-blue-500">
                    <div className="w-1/4 bg-yellow-100">
                      <ul
                        className="text-sm text-gray-700"
                        aria-labelledby="dropdown-button"
                      >
                        <p className="inline-flex w-full px-4 py-2 text-base font-semibold text-black">
                          Mockups
                        </p>

                        <li>
                          <button
                            type="button"
                            className="inline-flex w-full px-4 py-2 hover:text-black hover:font-semibold"
                          >
                            Mockups
                          </button>
                        </li>
                        {/* Tambahkan item lainnya di sini */}
                      </ul>
                    </div>

                    <div className="w-3/4 bg-red-100">
                      <div className="grid w-full grid-cols-3">
                        {/*  */}
                        <div>
                          <ul
                            className="text-sm text-gray-700"
                            aria-labelledby="dropdown-button"
                          >
                            <li>
                              <button
                                type="button"
                                className="inline-flex w-full px-4 py-2 hover:text-black hover:font-semibold"
                              >
                                Mockups
                              </button>
                            </li>
                            {/* Tambahkan item lainnya di sini */}
                          </ul>
                        </div>
                        {/*  */}
                        <div>
                          <ul
                            className="text-sm text-gray-700"
                            aria-labelledby="dropdown-button"
                          >
                            <li>
                              <button
                                type="button"
                                className="inline-flex w-full px-4 py-2 hover:text-black hover:font-semibold"
                              >
                                Mockups
                              </button>
                            </li>
                            {/* Tambahkan item lainnya di sini */}
                          </ul>
                          {/*  */}
                        </div>
                        <div>
                          <ul
                            className="text-sm text-gray-700"
                            aria-labelledby="dropdown-button"
                          >
                            <li>
                              <button
                                type="button"
                                className="inline-flex w-full px-4 py-2 hover:text-black hover:font-semibold"
                              >
                                Mockups
                              </button>
                            </li>
                            {/* Tambahkan item lainnya di sini */}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Search Input */}
              <div className="relative w-full">
                <input
                  type="search"
                  className="block p-1 sm:p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg sm:rounded-e-lg sm:border-s-gray-50 pl-3 sm:pl-7 sm:-ml-4 sm:border-s-2 border focus:ring-0 outline-none border-gray-300"
                  placeholder="Search..."
                  autoComplete="off"
                />
              </div>
            </div>
          </form>
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
        </div>
      </div>
    </div>
  );
};

export default Navbar;
