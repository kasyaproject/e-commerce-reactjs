import { useRef, useEffect, useState } from "react";
import { kategoriproduk } from "../data";
import { Link } from "react-router-dom";

const carouselKategori = () => {
  const [loading, setLoading] = useState(true);
  const carouselKategoriRef = useRef(null);
  const prevBtnKategoriRef = useRef(null);
  const nextBtnKategoriRef = useRef(null);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulasi loading selama 2 detik
      setLoading(false);
    };

    loadData();
  }, []);

  const terbaruButtonVisibility = () => {
    const carousel = carouselKategoriRef.current;
    if (carousel) {
      const isAtStartPopuler = carousel.scrollLeft === 0;
      const isAtEndPopuler =
        carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth;

      prevBtnKategoriRef.current.style.display = isAtStartPopuler
        ? "none"
        : "flex";
      nextBtnKategoriRef.current.style.display = isAtEndPopuler
        ? "none"
        : "flex";
    }
  };

  const handlePrevClick = () => {
    carouselKategoriRef.current.scrollBy({ left: -400, behavior: "smooth" });
    terbaruButtonVisibility();
  };

  const handleNextClick = () => {
    carouselKategoriRef.current.scrollBy({ left: 400, behavior: "smooth" });
    terbaruButtonVisibility();
  };

  useEffect(() => {
    terbaruButtonVisibility();
    // Menambah event listener pada scroll
    const carousel = carouselKategoriRef.current;
    carousel.addEventListener("scroll", terbaruButtonVisibility);

    // Membersihkan event listener saat komponen dibongkar
    return () =>
      carousel.removeEventListener("scroll", terbaruButtonVisibility);
  }, []);

  // Tampilan
  return (
    <div className="relative w-full px-2 sm:px-6 group">
      {/* Card Container */}
      <div
        className="w-full mb-3 mr-8 overflow-x-auto overflow-y-hidden md:overflow-x-hidden bg-blue-"
        ref={carouselKategoriRef}
      >
        {/* Card */}
        <div className="flex gap-4 p-3" id="carouselItems-populer">
          {kategoriproduk
            .sort((a, b) => b.count - a.count)
            .map((kategori) => (
              <div key={kategori.id} {...kategori}>
                <Link
                  to={`/etalase/${kategori.id}`}
                  className="flex flex-col items-center justify-between w-24 h-24 transition-transform duration-300 transform border-2 sm:w-40 sm:h-40 rounded-2xl hover:scale-105"
                >
                  <div className="flex items-center justify-center w-full bg-blue- h-4/5">
                    {loading ? (
                      // Loading event
                      <div
                        role="status"
                        className="w-full h-full bg-gray-300 rounded-t-lg "
                      >
                        <div className="flex items-center justify-center w-full h-full bg-gray-300 animate-pulse">
                          <svg
                            className="w-24 h-24 text-gray-200"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 18"
                          >
                            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                          </svg>
                        </div>
                      </div>
                    ) : (
                      <img
                        src={kategori.image}
                        alt={kategori.title}
                        className="object-cover object-center w-24 h-24"
                      />
                    )}
                  </div>

                  <div className="flex justify-center w-full h-2/5 bg-blue-">
                    {loading ? (
                      <div className="h-2.5 mt-4 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-4"></div>
                    ) : (
                      <h2 className="px-1 text-xs font-bold text-center text-gray-900 sm:mt-2 sm:text-base">
                        {kategori.title}
                      </h2>
                    )}
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </div>

      {/* button left */}
      <button
        type="button"
        ref={prevBtnKategoriRef}
        onClick={handlePrevClick}
        className="absolute left-0 z-20 flex items-center justify-center w-6 h-6 transition-transform transform -translate-y-1/2 bg-white border-2 rounded-full shadow opacity-0 sm:w-10 sm:h-10 group-hover:opacity-100 top-1/2 hover:scale-105"
        id="prevBtnPopuler"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-2 h-2 text-gray-800 sm:w-4 sm:h-4 dark:text-gray-200 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path stroke="currentColor" d="M5 1 1 5l4 4" />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>

      {/* button right */}
      <button
        type="button"
        ref={nextBtnKategoriRef}
        onClick={handleNextClick}
        className="absolute right-0 z-20 flex items-center justify-center w-6 h-6 transition-transform transform -translate-y-1/2 bg-white border-2 rounded-full shadow opacity-0 sm:w-10 sm:h-10 group-hover:opacity-100 top-1/2 hover:scale-105"
        id="nextBtnPopuler"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-2 h-2 text-gray-800 sm:w-4 sm:h-4 dark:text-gray-200 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path stroke="currentColor" d="m1 9 4-4-4-4" />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default carouselKategori;
