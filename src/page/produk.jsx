import React, { useState } from "react";
import { Dropdown } from "semantic-ui-react";
import { Link, useLocation } from "react-router-dom";

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import FotoProduk from "../components/foto-produk";
import Pengiriman from "../components/pilihan-pengiriman";
import CardProduk from "../components/card-produk";
import CardAksi from "../components/card-aksi";
import CardUlasan from "../components/card-ulasan";

import { allproduk, ulasanproduk } from "../data/index";

const friendOptions = [
  {
    key: "Terbaru",
    text: "Terbaru",
    value: "Terbaru",
  },
  {
    key: "Rating Tertinggi",
    text: "Rating Tertinggi",
    value: "Tertinggi",
  },
  {
    key: "Rating Terendah",
    text: "Rating Terendah",
    value: "Terendah",
  },
];

const produk = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const produkId = query.get("id");

  // Ambil data berdasarkan id
  const produk = allproduk.find((item) => item.id === produkId);

  const kategori = produk.kategori;
  // Filter data berdasarkan kategori yang sama dan selain yang di lihat
  const produkTerkait = allproduk.filter(
    (item) => item.kategori === kategori && item.id !== produkId
  );
  // Jika produk lainnya kurang dari 5
  let produkLainnya = [];
  const jumlahProdukTerkait = produkTerkait.length;

  if (jumlahProdukTerkait % 5 !== 0 || jumlahProdukTerkait === 0) {
    produkLainnya = allproduk
      .sort((a, b) => b.count - a.count) // Sort by 'count' in descending order
      .slice(0, 10 - jumlahProdukTerkait);
  } else {
    // If not enough related products, take the top 5 based on count
    produkLainnya = allproduk.sort((a, b) => b.count - a.count).slice(0, 0);
  }
  const hasilProduk = [...produkTerkait, ...produkLainnya];

  console.log(produk);

  // Filter Berdasarkan rating
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [sortOrder, setSortOrder] = useState("Terbaru");

  // Function to handle checkbox changes
  const handleCheckboxChange = (rating) => {
    setSelectedRatings(
      (prev) =>
        prev.includes(rating)
          ? prev.filter((r) => r !== rating) // Deselect if already included
          : [...prev, rating] // Select if not included
    );
  };

  // Filter reviews based on selected ratings
  const filteredReviews = ulasanproduk.filter((review) =>
    selectedRatings.length ? selectedRatings.includes(review.rating) : true
  );

  // Sort filtered reviews based on selected sort order
  const sortedReviews = filteredReviews.sort((a, b) => {
    if (sortOrder === "Terbaru") {
      return new Date(b.date) - new Date(a.date); // Sort by date descending
    }
    if (sortOrder === "Terendah") {
      return a.rating - b.rating; // Sort by rating ascending
    }
    if (sortOrder === "Tertinggi") {
      return b.rating - a.rating; // Sort by rating descending
    }
    return 0; // No sort
  });

  console.log(selectedRatings);

  return (
    <>
      <div className="flex flex-col items-center w-full min-h-screen justify-">
        <Navbar />

        <div className="w-[80rem] p-2 sm:block hidden">
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
        <div className="flex justify-center w-full h-auto sm:max-w-[80rem]">
          <div className="w-full p-2 ">
            <div className="flex flex-col w-full sm:flex-row bg-blue-">
              {/* foto */}
              <div className="sm:sticky w-full sm:w-[40%] bg-blue- top-24 h-max">
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
              <div className="w-full sm:w-[60%] h-auto">
                <div className="p-2 sm:px-8 bg-yellow-">
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

            <div className="w-full p-2 mt-10 sm:flex">
              <div className="w-full sm:sticky sm:w-1/3 h-max top-24">
                <p className="text-xl font-bold">ULASAN PEMBELI</p>

                <div className="flex items-center w-full sm:justify-center bg-blue-">
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

                <p className="mt-4 font-semibold text-gray-500 sm:text-center">
                  {produk.ratingcount} rating . {produk.count} terjual
                </p>

                <div className="justify-center hidden w-full px-2 py-4 sm:flex ">
                  <div className="w-4/5 border-2 rounded-lg">
                    <p className="px-4 pt-4 text-xl font-semibold">Rating</p>

                    {/* FIlter rating */}
                    {[5, 4, 3, 2, 1].map((rating) => (
                      <div className="flex items-center px-5 mb-4" key={rating}>
                        <input
                          type="checkbox"
                          checked={selectedRatings.includes(rating)}
                          onChange={() => handleCheckboxChange(rating)}
                          className="w-6 h-6 mr-4 text-blue-600 bg-gray-100 border-gray-300 rounded ring-0"
                        />
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="orange"
                          viewBox="0 0 24 24"
                          stroke="orange"
                          className="w-5 h-5 mr-2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z"
                          />
                        </svg>
                        <p className="text-lg font-semibold">{rating}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="w-full h-auto sm:w-2/3">
                {/* Header Ulasan */}
                <div className="flex items-center justify-between w-full">
                  <div className="mb-6">
                    <p className="font-bold">ULASAN PILIHAN</p>
                    <p className="-mt-3 font-semibold text-gray-500">
                      Menampilkan 10 dari 49 ulasan
                    </p>
                  </div>
                  <div className="items-center hidden gap-4 p-4 sm:flex">
                    <p className="font-semibold">Urutan</p>
                    <Dropdown
                      className="mb-2"
                      selection
                      defaultValue="Terbaru"
                      options={friendOptions}
                      onChange={(e, { value }) => setSortOrder(value)}
                    />
                  </div>
                </div>

                {/* Tampilkan Ulasan */}
                {/* <CardUlasan /> */}
                {sortedReviews.map((review) => (
                  <CardUlasan key={review.id} review={review} />
                ))}
              </div>
            </div>

            <hr className="h-px my-4 bg-gray-300 border-0" />
          </div>

          <div className="sticky justify-center hidden w-1/3 p-2 px-10 sm:flex top-24 h-max">
            {/* AKsi */}
            <CardAksi key={produk.id} {...produk} />
          </div>
        </div>

        <div className="flex justify-center flex-col w-full h-auto mb-12 sm:max-w-[80rem] p-2">
          <p className="px-5 text-xl font-bold text-gray-500">
            Produk lain nya
          </p>
          <div className="grid items-center w-full grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5 justify-items-center">
            {hasilProduk.map((item) => (
              <CardProduk key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default produk;
