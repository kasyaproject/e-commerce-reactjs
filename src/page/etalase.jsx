import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { kategoriproduk } from "../data";

const EtalaseProduk = () => {
  const { etalaseId } = useParams();
  // Ambil data berdasarkan id Kategori
  const etalase = kategoriproduk.find((data) => data.id === etalaseId);

  console.log("data :", etalase);

  return (
    <>
      {etalase ? (
        <p>
          Etalase : {etalase.id} - {etalase.title}
        </p>
      ) : (
        <p>Data tidak ditemukan</p>
      )}
    </>
  );
};

export default EtalaseProduk;
