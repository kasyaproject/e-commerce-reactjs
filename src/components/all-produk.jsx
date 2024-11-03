import { allproduk } from "../data/index";
import React, { useState, useEffect } from "react";
import CardProduk from "./card-produk";
import { Spin } from "antd";

const allProduk = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulasi loading selama 2 detik
      setLoading(false);
    };

    loadData();
  }, []);

  return (
    <>
      <div className="p-2">
        {loading ? (
          <div className="grid w-full grid-cols-1 gap-4 p-4 border-2 rounded-lg shadow-md sm:py-10">
            <Spin tip="Loading" size="large" />
          </div>
        ) : (
          <div className="grid w-full grid-cols-2 gap-4 p-4 border-2 rounded-lg shadow-md sm:grid-cols-3 lg:grid-cols-5 sm:p-4">
            {allproduk
              .sort((a, b) => b.date - a.date)
              .map((produk) => (
                <CardProduk key={produk.id} {...produk} />
              ))}
          </div>
        )}
      </div>
    </>
  );
};
export default allProduk;
