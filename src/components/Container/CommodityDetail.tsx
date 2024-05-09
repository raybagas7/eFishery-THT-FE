import React from "react";
import style from "./CommodityDetail.module.scss";
import { Commodity } from "@/types/alltypes";
import InputUi from "../ui/input-ui";
import { formatDate, formatIDR } from "@/libs/utils";
import CalendarButton from "../ui/calendar-button";

interface ICommodityDetail {
  commodityData: Commodity;
}

const CommodityDetail = ({ commodityData }: ICommodityDetail) => {
  console.log(commodityData);

  return (
    <section className={style.commodity_detail_container}>
      <div className={style.commodity_detail_card}>
        <InputUi value={commodityData.komoditas} name="komoditas" disabled />
        <InputUi
          value={formatIDR(parseInt(commodityData.price))}
          name="harga"
          disabled
        />
        <InputUi value={commodityData.size} name="ukuran" disabled />
        <div className={style.area_box}>
          <div>
            <InputUi
              value={commodityData.area_provinsi}
              name="provinsi"
              disabled
            />
          </div>
          <div>
            <InputUi value={commodityData.area_kota} name="kota" disabled />
          </div>
        </div>
        <div className={style.date_box}>
          <CalendarButton
            value={formatDate(new Date(commodityData.tgl_parsed), "long")}
          />
        </div>
      </div>
    </section>
  );
};

export default CommodityDetail;
