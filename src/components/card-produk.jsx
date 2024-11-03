import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const cardProduk = ({
  id,
  title,
  images,
  price,
  discount,
  rating,
  count,
  wishlist,
}) => {
  const [isLiked, setIsLiked] = useState(wishlist === "true");

  const handleLike = () => {
    setIsLiked((prev) => !prev); // Toggle isLiked state
  };

  return (
    <>
      <div className="flex flex-col justify-between w-full transition-transform duration-100 transform bg-white border border-gray-200 rounded-lg shadow shrink-0 sm:w-52 hover:scale-105 hover:shadow-lg">
        {/* Image */}
        <Link to={`/produk/${id}`}>
          <img
            className="object-cover w-full rounded-t-lg h-44 sm:h-48"
            src={images[0]}
            alt=""
          />
        </Link>

        <Link
          to={`/produk/${id}`}
          className="flex flex-col justify-between h-full p-2 "
        >
          {/* Tittle */}
          <div>
            <h5 className="mb-1 text-sm font-bold tracking-tight text-gray-900 sm:text-base line-clamp-2 dark:text-white">
              {title}
            </h5>
          </div>

          {/* Harga */}
          <div>
            <div className="flex items-center">
              <label className="pr-1 text-xs font-normal text-gray-500 line-through ">
                Rp {price.toLocaleString("id-ID")}
              </label>
              <label className="pr-2 text-xs font-bold text-red-700 ">
                {discount}%
              </label>
            </div>
            <p className="text-xs font-semibold text-gray-700 sm:text-sm ">
              Rp {(price - (price * discount) / 100).toLocaleString("id-ID")}
            </p>
          </div>
        </Link>

        {/* Like Button */}
        <div className="flex items-center justify-between px-2 pb-2">
          {/* Rating */}
          <div className="flex items-center justify-between bg-blue-">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="orange"
                viewBox="0 0 24 24"
                stroke="orange"
                className="w-2 h-2 mr-1 sm:w-3 sm:h-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z"
                />
              </svg>
              <p className="text-xs text-gray-700 sm:text-sm font-sm ">
                {rating} | {count} Terjual
              </p>
            </div>
          </div>

          <button
            onClick={handleLike}
            className={`text-xs ${isLiked ? "text-red-600" : "text-gray-500"}`}
          >
            {isLiked ? "❤️" : "🤍"}
          </button>
        </div>
      </div>
    </>
  );
};

export default cardProduk;
