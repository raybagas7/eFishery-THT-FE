import { ICommodityDeletedCard } from "@/interfaces/components";
import React from "react";
import style from "./CommodityCard.module.scss";
import DeletedCommodityDesktopCard from "./DeletedCommodityDesktopCard";

const DeletedCommodityCard = ({ index, page }: ICommodityDeletedCard) => {
  return (
    <li className={style.list_card_deleted}>
      <DeletedCommodityDesktopCard index={index} page={page} />
    </li>
  );
};

export default DeletedCommodityCard;
