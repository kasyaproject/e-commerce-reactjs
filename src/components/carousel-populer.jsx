import { useRef, useEffect, useState } from "react";
import CardPromo from "../components/card-promo";
import { allproduk } from "../data";

const carouselPopuler = () => {
  const [loading, setLoading] = useState(true);
  const carouselPopulerRef = useRef(null);
  const prevBtnPopulerRef = useRef(null);
  const nextBtnPopulerRef = useRef(null);

  const terbaruButtonVisibility = () => {
    const carousel = carouselPopulerRef.current;
    if (carousel) {
      const isAtStartPopuler = carousel.scrollLeft === 0;
      const isAtEndPopuler =
        carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth;

      prevBtnPopulerRef.current.style.display = isAtStartPopuler
        ? "none"
        : "flex";
      nextBtnPopulerRef.current.style.display = isAtEndPopuler
        ? "none"
        : "flex";
    }
  };

  const handlePrevClick = () => {
    carouselPopulerRef.current.scrollBy({ left: -400, behavior: "smooth" });
    terbaruButtonVisibility();
  };

  const handleNextClick = () => {
    carouselPopulerRef.current.scrollBy({ left: 400, behavior: "smooth" });
    terbaruButtonVisibility();
  };

  useEffect(() => {
    terbaruButtonVisibility();
    // Menambah event listener pada scroll
    const carousel = carouselPopulerRef.current;
    carousel.addEventListener("scroll", terbaruButtonVisibility);

    // Membersihkan event listener saat komponen dibongkar
    return () =>
      carousel.removeEventListener("scroll", terbaruButtonVisibility);
  }, []);

  return (
    <div className="relative w-full px-2 sm:px-6 group">
      {/* Card Container */}
      <div
        className="w-full mb-3 mr-8 overflow-x-auto overflow-y-hidden md:overflow-x-hidden bg-blue-"
        ref={carouselPopulerRef}
      >
        <div className="flex gap-4 p-3" id="carouselItems-populer">
          {/* Card */}
          {allproduk
            .sort((a, b) => b.count - a.count)
            .slice(0, 10)
            .map((produk) => (
              <CardPromo key={produk.id} {...produk} />
            ))}
        </div>
      </div>

      {/* button left */}
      <button
        type="button"
        ref={prevBtnPopulerRef}
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
        ref={nextBtnPopulerRef}
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

export default carouselPopuler;
