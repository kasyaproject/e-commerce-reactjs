import { allproduk } from "../data/index";
import React, { useState, useEffect } from "react";
import CardProduk from "./card-produk";
import { Pagination } from "semantic-ui-react";
import { Spin } from "antd";

const allProduk = () => {
  const [activePage, setActivePage] = useState(1);
  const itemsPerPage = 20;
  const totalPages = Math.ceil(allproduk.length / itemsPerPage);
  const [paginatedData, setPaginatedData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Loading 2 sec
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulasi loading selama 2 detik
      setLoading(false);
    };

    loadData();
  }, []);

  // Pagination
  useEffect(() => {
    const startIndex = (activePage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setPaginatedData(allproduk.slice(startIndex, endIndex));
  }, [activePage]);

  const handlePaginationChange = (e, { activePage }) =>
    setActivePage(activePage);

  return (
    <>
      <div className="p-2 border-2 rounded-lg shadow-md">
        {loading ? (
          <div className="grid w-full grid-cols-1 gap-4 p-4 border-2 rounded-lg shadow-md sm:py-10">
            <Spin size="large" />
          </div>
        ) : (
          <div className="w-full h-auto">
            <div className="flex items-center justify-end w-full px-6 pt-4 mb-6">
              <Pagination
                activePage={activePage}
                totalPages={totalPages}
                onPageChange={handlePaginationChange}
                size="mini"
              />
            </div>

            <div className="grid w-full grid-cols-2 gap-4 p-4 sm:grid-cols-3 lg:grid-cols-5 sm:p-4">
              {paginatedData
                .sort((a, b) => b.date - a.date)
                .map((produk) => (
                  <CardProduk key={produk.id} {...produk} />
                ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default allProduk;
