// Import componenets
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import AllProduk from "../components/all-produk";
import CarouselPromo from "../components/carousel-promo";
import CarouselPopuler from "../components/carousel-populer";
import CarouselKategori from "../components/carousel-kategori";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-between w-full min-h-screen">
      <Navbar />

      {/* Main Body */}
      <div className="flex flex-col w-full h-auto gap- sm:gap-2 sm:py-4 bg-blue- sm:max-w-6xl">
        <div className="flex justify-center h-48 p-2 sm:h-72">
          {/* Carosel */}
          <CarouselPromo />
        </div>

        <div className="flex justify-center w-full h-auto p-2">
          <div className="w-full border-2 rounded-lg shadow-md sm:p-2">
            <h1 className="p-2 text-xl font-bold sm:px-5 sm:py-3 sm:text-2xl">
              Populer Produk
            </h1>

            {/*Card Populer */}
            <CarouselPopuler />
          </div>
        </div>

        <div className="flex justify-center w-full h-auto p-2">
          <div className="w-full border-2 rounded-lg shadow-md sm:p-2">
            <h1 className="p-2 text-xl font-bold sm:px-5 sm:py-3 sm:text-2xl">
              Kategori
            </h1>

            {/*Card Populer */}
            <CarouselKategori />
          </div>
        </div>

        <hr className="h-px my-4 bg-gray-300 border-0" />

        <AllProduk />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
