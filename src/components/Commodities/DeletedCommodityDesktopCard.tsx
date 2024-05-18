import { ICommodityDeletedDesktopCard } from "@/interfaces/components";
import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import style from "./CommodityDesktopCard.module.scss";

const DeletedCommodityDesktopCard = ({
  index,
  page,
}: ICommodityDeletedDesktopCard) => {
  return (
    <div className={style.list_card_desktop_deleted}>
      <div className={style.list_number_wrapper}>
        <p>{index + page * 10 + 1}</p>
      </div>
      <div className={style.list_commodity_value}>
        <div>
          <p>Deleted</p>
        </div>
        <div>
          <p>-</p>
        </div>
        <div>
          <p>- </p>
        </div>
        <div>-</div>
        <div>-</div>
        <div>-</div>
      </div>
      <div className={style.action_option}>
        <div className={style.commodity_option}>
          <BsThreeDotsVertical />
        </div>
      </div>
    </div>
  );
};

export default DeletedCommodityDesktopCard;
