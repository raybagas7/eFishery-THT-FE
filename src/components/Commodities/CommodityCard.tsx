import { ICommodityCard } from "@/interfaces/components";
import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import style from "./CommodityCard.module.scss";
import { usePopup } from "@/store/usePopUp";
import PopUpActionContent from "../Actions/PopUpActionContent";
import { formatDate, formatIDR } from "@/libs/utils";
import { RiArrowRightSLine } from "react-icons/ri";
import { motion } from "framer-motion";
import CommodityDesktopCard from "./CommodityDesktopCard";

const CommodityCard = ({ commodityData, index, page }: ICommodityCard) => {
  const [hideDetail, setHideDetail] = useState<boolean | undefined>(false);
  const { showPopup } = usePopup();

  const toggleDetail = () => {
    setHideDetail((prev) => (prev === undefined ? false : !prev));
  };

  const onOptionClick = () => {
    showPopup(<PopUpActionContent uuid={commodityData.uuid} />);
  };

  const detailVariants = {
    close: {
      opacity: 0,
      height: 0,
      marginTop: 0,
    },
    open: {
      opacity: 1,
      height: "auto",
      marginTop: 12,
    },
  };

  return (
    <li className={style.list_card}>
      <CommodityDesktopCard
        commodityData={commodityData}
        index={index}
        page={page}
      />
      <div className={style.commodity_box}>
        <div className={style.commodity_head}>
          <p>
            Komoditas - {commodityData.komoditas} - {commodityData.size}
          </p>
          {/* <p>{formatDate(new Date(commodityData.tgl_parsed), "short")}</p> */}
        </div>
        <BsThreeDotsVertical
          className={style.commodity_option}
          onClick={onOptionClick}
        />
      </div>
      <button className={style.collapse_button} onClick={toggleDetail}>
        <p>Collapse</p>
        <motion.div animate={{ rotate: hideDetail ? 90 : 0 }}>
          <RiArrowRightSLine />
        </motion.div>
      </button>
      <motion.div
        className={style.detailed_commodity}
        variants={detailVariants}
        initial="close"
        animate={hideDetail ? "open" : "close"}
      >
        <div>
          <p>Provinsi</p>
          <p>{commodityData.area_provinsi}</p>
        </div>
        <div>
          <p>Kota</p>
          <p>{commodityData.area_kota}</p>
        </div>
        <div>
          <p>Tanggal</p>
          <p>{formatDate(new Date(commodityData.tgl_parsed), "short")}</p>
        </div>
        <div>
          <p>Harga</p>
          <p>{formatIDR(parseInt(commodityData.price))}</p>
        </div>
      </motion.div>
    </li>
  );
};

export default CommodityCard;
