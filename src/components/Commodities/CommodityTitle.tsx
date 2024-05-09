import React from "react";
import style from "./CommodityTitle.module.scss";

const CommodityTitle = () => {
  return (
    <div className={style.commodity_title_container}>
      <div className={style.number_title}>
        <p>No</p>
      </div>
      <div className={style.all_title_box}>
        <div>
          <p>Komoditas</p>
        </div>
        <div>
          <p>Provinsi</p>
        </div>
        <div>
          <p>Kota</p>
        </div>
        <div>
          <p>Ukuran</p>
        </div>
        <div>
          <p>Tanggal</p>
        </div>
        <div>
          <p>Harga</p>
        </div>
      </div>
      <div className={style.action_title}>
        <div>
          <p>Action</p>
        </div>
      </div>
    </div>
  );
};

export default CommodityTitle;
