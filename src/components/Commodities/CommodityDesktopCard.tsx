import { ICommodityDesktopCard } from "@/interfaces/components";
import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import style from "./CommodityDesktopCard.module.scss";
import { formatDate, formatIDR } from "@/libs/utils";

const CommodityDesktopCard = ({
  commodityData,
  index,
  page,
}: ICommodityDesktopCard) => {
  return (
    <div className={style.list_card_desktop}>
      <div className={style.list_number_wrapper}>
        <p>{index + page * 10 + 1}</p>
      </div>
      <div className={style.list_commodity_value}>
        <div>
          <p>{commodityData.komoditas}</p>
        </div>
        <div>
          <p>{commodityData.area_provinsi}</p>
        </div>
        <div>
          <p>{commodityData.area_kota}</p>
        </div>
        <div>
          <p>{commodityData.size}</p>
        </div>
        <div>
          <p>{formatDate(new Date(commodityData.tgl_parsed), "short")}</p>
        </div>
        <div>
          <p>{formatIDR(parseInt(commodityData.price))}</p>
        </div>
      </div>
      <div className={style.action_option}>
        <BsThreeDotsVertical
          className={style.commodity_option}
          //   onClick={onOptionClick}
        />
      </div>
    </div>
  );
};

export default CommodityDesktopCard;
