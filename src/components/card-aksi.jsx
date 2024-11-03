import React, { useState } from "react";

const cardaksi = ({ stock, discount, description, price, imageUrl }) => {
  const [isLiked, setIsLiked] = useState();
  // State untuk menyimpan nilai jumlah
  const [quantity, setQuantity] = useState(1);

  // Fungsi untuk menambah jumlah
  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  // Fungsi untuk mengurangi jumlah
  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1)); // Tidak kurang dari 1
  };

  // Handle button wishlist
  const handleLike = () => {
    setIsLiked((prev) => !prev); // Toggle isLiked state
  };

  return (
    <div className="w-full px-4 py-2 border-2 rounded-2xl">
      <p className="text-xl font-semibold">Atur Jumlah Pembelian</p>

      <div className="flex items-center gap-2 mb-4">
        <div className="relative w-full px-1 py-1 border-2 rounded-md">
          <div>
            <div className="font-bold text-center">{quantity}</div>
            <input
              type="number"
              value={quantity}
              className="hidden" // Menggunakan hidden untuk input
              readOnly // Menjadikan input hanya untuk dibaca
            />
          </div>

          <div className="absolute top-0 right-0 z-10 p-0.5">
            <button
              className="px-1.5 font-semibold py-0.5 rounded-lg border-2 border-white hover:border-blue-500"
              onClick={increaseQuantity}
            >
              +
            </button>
          </div>
          <div className="absolute top-0 left-0 z-10 p-0.5">
            <button
              className="px-2 font-semibold py-0.5 rounded-lg border-2 border-white hover:border-blue-500"
              onClick={decreaseQuantity}
            >
              -
            </button>
          </div>
        </div>

        <div className="flex items-center w-full">
          <p>
            Total Stock :{" "}
            <label className="font-semibold text-orange-400">
              Sisa {stock}
            </label>
          </p>
        </div>
      </div>

      <div className="flex items-end justify-between mb-4">
        <div className="">
          <p className="font-semibold text-gray-500">Subtotal</p>
        </div>
        <div className="text-right">
          <p className="font-semibold text-gray-500 line-through">
            Rp
            {((price - (price * discount) / 100) * quantity).toLocaleString(
              "id-ID"
            )}
          </p>
          <p className="-mt-4 text-xl font-bold ">
            Rp{(price * quantity).toLocaleString("id-ID")}
          </p>
        </div>
      </div>

      <button className="w-full py-3 mb-2 font-semibold text-white bg-blue-600 rounded-xl hover:bg-blue-700">
        Beli
      </button>

      <button className="w-full py-3 mb-2 font-semibold text-blue-600 border-2 border-blue-600 bg-gray-50 rounded-xl hover:bg-gray-100">
        Masukan Keranjang
      </button>

      <div className="flex items-center justify-end mt-3 text-sm">
        <button onClick={handleLike}>
          {isLiked ? "❤️ Wishlist" : "🤍 Wishlist"}
        </button>
      </div>
    </div>
  );
};

export default cardaksi;
