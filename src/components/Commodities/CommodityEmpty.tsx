import React from "react";
import { MdSearchOff } from "react-icons/md";
import style from "./CommodityEmpty.module.scss";

const CommodityEmpty = () => {
  return (
    <div className={style.empty_commodity_container}>
      <MdSearchOff />
      <div className={style.text_information}>
        <h2>No Commodity Found</h2>
        <p>There is no Commodity right now</p>
      </div>
    </div>
  );
};

export default CommodityEmpty;
