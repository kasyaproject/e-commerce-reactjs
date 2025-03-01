import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const cardPromo = ({
  id,
  slug,
  title,
  images,
  price,
  discount,
  rating,
  pembelian,
}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulasi loading selama 2 detik
      setLoading(false);
    };

    loadData();
  }, []);

  return (
    <>
      <Link
        to={`/produk/${slug}`}
        className="flex flex-col justify-between w-32 transition-transform duration-100 transform bg-white border border-gray-200 rounded-lg shadow shrink-0 sm:w-40 hover:scale-105 hover:shadow-lg"
      >
        {/* Image */}
        {loading ? (
          <div className="flex justify-center w-full h-32 p-3 bg-gray-300 rounded-t-lg sm:p-5 sm:h-36">
            <svg
              className="text-gray-200 w- animate-pulse h-28"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 18"
            >
              <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
            </svg>
          </div>
        ) : (
          <div>
            <img
              className="object-cover w-full h-32 rounded-t-lg sm:h-36"
              src={images[0]}
              alt=""
            />
          </div>
        )}

        <div className="flex flex-col justify-between h-full p-2 ">
          {/* Tittle */}
          <div>
            {loading ? (
              <div className="h-2.5 mt-4 bg-gray-200 rounded-full  w-24 sm:w-28 mb-4"></div>
            ) : (
              <h5 className="mb-1 text-sm font-bold tracking-tight text-gray-900 sm:text-base line-clamp-2 dark:text-white">
                {title}
              </h5>
            )}
          </div>

          {/* Harga */}
          <div>
            {loading ? (
              <div className="h-2.5  bg-gray-200 rounded-full  w-20 mb-1"></div>
            ) : (
              <div className="flex items-center">
                <label className="pr-1 text-xs font-normal text-gray-500 line-through ">
                  Rp {price.toLocaleString("id-ID")}
                </label>
                <label className="pr-2 text-xs font-bold text-red-700 ">
                  {discount}%
                </label>
              </div>
            )}

            {loading ? (
              <div className="h-2.5  bg-gray-200 rounded-full  w-24 mb-4"></div>
            ) : (
              <p className="text-xs font-semibold text-gray-700 sm:text-sm">
                Rp {(price - (price * discount) / 100).toLocaleString("id-ID")}
              </p>
            )}

            {/* Rating */}
            {loading ? (
              <div className="h-2.5  bg-gray-200 rounded-full  w-28 sm:w-32"></div>
            ) : (
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="orange"
                  viewBox="0 0 24 24"
                  stroke="orange"
                  className="w-2 h-2 mr-1 sm:w-3 sm:h-3"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <p className="text-xs text-gray-700 sm:text-sm font-sm ">
                  {rating} | {pembelian} Terjual
                </p>
              </div>
            )}
          </div>
        </div>
      </Link>
    </>
  );
};

export default cardPromo;
