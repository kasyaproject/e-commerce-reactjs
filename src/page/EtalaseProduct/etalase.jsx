import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { allproduk } from "../../data";

const EtalaseProduk = () => {
  const { etalaseName } = useParams();
  // Ambil data berdasarkan id Kategori
  const etalase = allproduk.filter((data) =>
    data.kategori.some((kategori) => kategori === etalaseName)
  );

  console.log("params :", etalaseName);
  console.log("data :", etalase);

  return (
    <>
      {etalase ? (
        <p>
          Etalase : {etalaseName} - {etalase.length} data
        </p>
      ) : (
        <p>Data tidak ditemukan</p>
      )}
    </>
  );
};

export default EtalaseProduk;
