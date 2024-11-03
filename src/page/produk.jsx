import React, { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import FotoProduk from "../components/foto-produk";
import Pengiriman from "../components/pilihan-pengiriman";
import { Link } from "react-router-dom";

import { useParams } from "react-router-dom";
import { allproduk } from "../data/index";

const produk = () => {
  const { produkId } = useParams();
  const [isLiked, setIsLiked] = useState();
  // State untuk menyimpan nilai jumlah
  const [quantity, setQuantity] = useState(1);

  // Ambil data berdasarkan id
  const produk = allproduk.find((item) => item.id === produkId);

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
    <>
      <div className="flex flex-col items-center w-full min-h-screen justify-">
        <Navbar />

        <div className="w-[80rem] p-2 ">
          {/* Breadcrum */}
          <div className="">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                <li className="inline-flex items-center">
                  <Link
                    to={"/"}
                    className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                  >
                    <svg
                      className="w-3 h-3 me-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                    </svg>
                    Home
                  </Link>
                </li>
                <li>
                  <div className="flex items-center">
                    <svg
                      className="w-3 h-3 mx-1 text-gray-400 stroke-2 rtl:rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path stroke="currentColor" d="m1 9 4-4-4-4" />
                    </svg>
                    <Link
                      to={"/"}
                      className="text-sm font-medium text-gray-700 ms-1 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
                    >
                      kategori
                    </Link>
                  </div>
                </li>
                <li aria-current="page">
                  <div className="flex items-center">
                    <svg
                      className="w-3 h-3 mx-1 text-gray-400 stroke-2 rtl:rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path stroke="currentColor" d="m1 9 4-4-4-4" />
                    </svg>
                    <span className="text-sm font-medium text-gray-500 ms-1 md:ms-2 dark:text-gray-400">
                      {produk.title}
                    </span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Main Body */}
        <div className="flex justify-center w-full h-auto  sm:max-w-[80rem]">
          <div className="w-full p-2 ">
            <div className="flex w-full bg-blue-">
              {/* foto */}
              <div className="sticky w-[40%] bg-blue- top-24 h-max">
                {/* Foto */}
                <div className="sticky w-full p-2 bg-green- h-max top-24">
                  <FotoProduk
                    key={produk.id}
                    src={produk.images}
                    className="sticky top-4"
                  />
                </div>
              </div>
              {/* description */}
              <div className="w-[60%] h-auto">
                <div className="p-2 px-8 bg-yellow-">
                  {/* Judul */}
                  <h2>{produk.title}</h2>

                  {/* Statistik */}
                  <div className="flex gap-4">
                    <p className="font-">
                      Terjual{" "}
                      <label className="font-medium text-gray-500">
                        {produk.count}
                      </label>
                    </p>

                    <div className="flex gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="orange"
                        className="w-3 h-3 mt-1"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <p>
                        {produk.rating}{" "}
                        <label className="font-medium text-gray-500">
                          ({produk.ratingcount} rating)
                        </label>
                      </p>
                    </div>
                  </div>

                  {/* HArga */}
                  <div>
                    <p className="text-[25px] font-bold">
                      Rp. {produk.price.toLocaleString("id-ID")}
                    </p>
                    <div className="flex gap-2 -mt-6">
                      <p className="px-1 rounded-md font-semibold py-0.5 text-sm text-red-700 bg-red-300 ">
                        {produk.discount}%
                      </p>
                      <p className="font-semibold text-gray-400 line-through">
                        Rp.{" "}
                        {(
                          produk.price -
                          (produk.price * produk.discount) / 100
                        ).toLocaleString("id-ID")}
                      </p>
                    </div>
                  </div>

                  <hr className="h-px my-2 bg-gray-200 border-0" />

                  {/* Descripsi Produk */}
                  <div>
                    <p className="text-2xl font-bold">Description</p>
                    <p className="-mt-2 text-lg">{produk.description}</p>
                  </div>

                  <hr className="h-px my-4 bg-gray-200 border-0" />

                  {/* Pengiriman */}
                  <div>
                    <p className="text-xl font-bold">Pengiriman</p>

                    <Pengiriman />
                  </div>
                </div>
              </div>
            </div>

            <hr className="h-px my-4 bg-gray-300 border-0" />

            <div className="flex w-full p-2 mt-10">
              <div className="sticky w-1/3 h-max top-24">
                <p className="text-xl font-bold">ULASAN PEMBELI</p>

                <div className="flex items-center justify-center w-full bg-blue-">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="orange"
                    viewBox="0 0 24 24"
                    stroke="orange"
                    className="w-8 h-8 mr-2 bg-yellow-"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z"
                    />
                  </svg>
                  <p className="font-bold text-7xl bg-green-">
                    {produk.rating} <label className="text-xl">/ 5.0</label>
                  </p>
                </div>

                <p className="mt-4 font-semibold text-center text-gray-500">
                  {produk.ratingcount} rating . {produk.count} terjual
                </p>

                <div className="flex justify-center w-full px-2 py-4 ">
                  <div className="w-4/5 border-2 rounded-lg">
                    <p className="px-4 pt-4 text-xl font-semibold">Rating</p>

                    {/* Bintang 5 */}
                    <div className="flex items-center px-5 mb-4">
                      <input
                        id="vue-checkbox-list"
                        type="checkbox"
                        value=""
                        class="w-6 h-6 mr-4 text-blue-600 bg-gray-100 border-gray-300 rounded ring-0"
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="orange"
                        viewBox="0 0 24 24"
                        stroke="orange"
                        className="w-5 h-5 mr-2 bg-yellow-"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z"
                        />
                      </svg>

                      <p className="text-lg font-semibold">5</p>
                    </div>
                    {/* Bintang 4 */}
                    <div className="flex items-center px-5 mb-4">
                      <input
                        id="vue-checkbox-list"
                        type="checkbox"
                        value=""
                        class="w-6 h-6 mr-4 text-blue-600 bg-gray-100 border-gray-300 rounded ring-0"
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="orange"
                        viewBox="0 0 24 24"
                        stroke="orange"
                        className="w-5 h-5 mr-2 bg-yellow-"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z"
                        />
                      </svg>

                      <p className="text-lg font-semibold">4</p>
                    </div>
                    {/* Bintang 3 */}
                    <div className="flex items-center px-5 mb-4">
                      <input
                        id="vue-checkbox-list"
                        type="checkbox"
                        value=""
                        class="w-6 h-6 mr-4 text-blue-600 bg-gray-100 border-gray-300 rounded ring-0"
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="orange"
                        viewBox="0 0 24 24"
                        stroke="orange"
                        className="w-5 h-5 mr-2 bg-yellow-"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z"
                        />
                      </svg>

                      <p className="text-lg font-semibold">3</p>
                    </div>
                    {/* Bintang 2 */}
                    <div className="flex items-center px-5 mb-4">
                      <input
                        id="vue-checkbox-list"
                        type="checkbox"
                        value=""
                        class="w-6 h-6 mr-4 text-blue-600 bg-gray-100 border-gray-300 rounded ring-0"
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="orange"
                        viewBox="0 0 24 24"
                        stroke="orange"
                        className="w-5 h-5 mr-2 bg-yellow-"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z"
                        />
                      </svg>

                      <p className="text-lg font-semibold">2</p>
                    </div>
                    {/* Bintang 1 */}
                    <div className="flex items-center px-5 mb-4">
                      <input
                        id="vue-checkbox-list"
                        type="checkbox"
                        value=""
                        class="w-6 h-6 mr-4 text-blue-600 bg-gray-100 border-gray-300 rounded ring-0"
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="orange"
                        viewBox="0 0 24 24"
                        stroke="orange"
                        className="w-5 h-5 mr-2 bg-yellow-"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z"
                        />
                      </svg>

                      <p className="text-lg font-semibold">1</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-2/3 h-auto">
                <div>carousel foto</div>
              </div>
            </div>
          </div>

          <div className="sticky flex justify-center w-1/3 p-2 px-10 top-24 h-max">
            {/* AKsi */}
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
                      Sisa 400
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
                    Rp1.799.000
                  </p>
                  <p className="-mt-4 text-xl font-bold ">Rp1.249.000</p>
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
                  {/* <p>🤍 Wishlist</p> */}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default produk;
