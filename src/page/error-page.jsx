import { Link, useRouteError } from "react-router-dom";

import Logo from "../assets/Kasya_Store.png";
import BackgroundImage from "../assets/nightSky.png";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="w-full h-screen">
      <div class="absolute top-0 items-center justify-between w-full px-1 py-2 bg-white shadow sm:gap-4 sm:px-8">
        <Link to={"/"} class="items-center hidden mr-10 sm:flex">
          <img src={Logo} alt="logo" class="w-16 h-16" />
          <p class="text-2xl font-extrabold text-black">E-Commerce</p>
        </Link>
      </div>

      <div className="flex items-center justify-center w-full h-full bg-gray-50">
        <div className="flex flex-col items-center">
          <h1 className="font-extrabold text-[200px]">
            <span class="bg-clip-text text-transparent bg-text-image">
              Oops!
            </span>
          </h1>
          <h1 className="text-3xl font-bold">404 - Halaman tidak ditemukan</h1>

          <p className="mt-4">
            Halaman yang Anda cari mungkin telah dihapus, namanya telah diubah,
            atau sementara tidak tersedia.
          </p>

          <Link to={"/"}>
            <button className="px-8 py-3 mt-8 font-bold text-white transition-transform duration-100 transform bg-blue-600 rounded-full shadow-lg hover:scale-105 hover:shadow-xl">
              Kembali ke Homepage
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
