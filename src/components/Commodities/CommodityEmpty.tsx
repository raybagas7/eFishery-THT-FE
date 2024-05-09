import React from "react";
import { MdSearchOff } from "react-icons/md";
import style from "./CommodityEmpty.module.scss";

const CommodityEmpty = () => {
  return (
    <div className={style.empty_commodity_container}>
      <MdSearchOff />
      <div className={style.text_information}>
        <h2>Komoditas tidak dapat ditemukan</h2>
        <p>Saat ini komoditas yang ada cari tidak tersedia</p>
      </div>
    </div>
  );
};

export default CommodityEmpty;
