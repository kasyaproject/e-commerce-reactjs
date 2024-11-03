// import pengiriman from "../data";

const pilihanPengiriman = () => {
  return (
    <>
      {/* Dikirim dari */}
      <div className="flex gap-2 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
          <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
        </svg>
        <p>
          Dikirim dari{" "}
          <label className="font-semibold">Depok, Jawa Barat</label>
        </p>
      </div>

      {/* Estimasi Pengiriman */}
      <div className="flex w-full gap-2 mt-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2zm3.564 1.426L5.596 5 8 5.961 14.154 3.5zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464z" />
        </svg>
        <div>
          <p>Ongkir Reguler 7 rb - 15 rb</p>
          <p className="-mt-4 text-gray-400">Estimasi tiba besok - 6 Nov</p>
        </div>
      </div>

      {/* Button pilih kurir */}
      <div className="flex justify-end w-full ">
        <button className="font-semibold text-blue-500">
          Lihat Pilihan Kurir
        </button>
      </div>
    </>
  );
};

export default pilihanPengiriman;
