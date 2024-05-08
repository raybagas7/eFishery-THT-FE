import { ICommodityCard } from "@/interfaces/components";
import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import style from "./CommodityCard.module.scss";
import { usePopup } from "@/store/usePopUp";
import PopUpActionContent from "../Actions/PopUpActionContent";
import { formatDate } from "@/libs/utils";

const CommodityCard = ({ commodityData }: ICommodityCard) => {
  const { showPopup } = usePopup();

  const onOptionClick = () => {
    showPopup(<PopUpActionContent uuid={commodityData.uuid} />);
  };

  return (
    <li>
      <div className={style.commodity_box}>
        <div className={style.commodity_head}>
          <p>
            {commodityData.komoditas} -
            {commodityData.area_kota ? commodityData.area_kota : "Unknown"}
          </p>
          <p>{formatDate(new Date(commodityData.tgl_parsed), "short")}</p>
        </div>
        <BsThreeDotsVertical
          className={style.commodity_option}
          onClick={onOptionClick}
        />
      </div>
    </li>
  );
};

export default CommodityCard;
