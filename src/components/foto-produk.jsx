import React, { useState, useRef, useEffect } from "react";

const fotoproduk = ({ src }) => {
  // Data Image
  const images = Array.isArray(src) ? src : [src];

  //   Set Foto sesuai index pertama
  const [mainImage, setMainImage] = useState(images[0]);

  //   Set foto sesuai yang di klik
  const handleImageClick = (imageSrc) => {
    setMainImage(imageSrc);
  };

  const carouselKategoriRef = useRef(null);
  const prevBtnKategoriRef = useRef(null);
  const nextBtnKategoriRef = useRef(null);

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

  return (
    <>
      {/* Main Foto */}
      <img
        src={mainImage}
        alt="Main Foto"
        className="object-fill w-full border-2 rounded-lg h-[22rem]"
      />

      {/* Slide Foto */}
      <div className="relative group bg-blue-">
        <div className="w-full overflow-x-hidden" ref={carouselKategoriRef}>
          <div className="flex items-center gap-2 mt-8">
            {images.map((src, index) => (
              <div
                key={index}
                className={`rounded-xl ${
                  mainImage === src ? "border-2 border-blue-600" : ""
                } w-16 h-16 shrink-0`}
              >
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="object-fill w-full h-full rounded-lg cursor-pointer"
                  onClick={() => handleImageClick(src)}
                />
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
    </>
  );
};

export default fotoproduk;
