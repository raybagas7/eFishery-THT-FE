import { ICommodityDesktopCard } from "@/interfaces/components";
import React, { useState, useCallback } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import style from "./CommodityDesktopCard.module.scss";
import { formatDate, formatIDR } from "@/libs/utils";
import { Popover } from "react-tiny-popover";
import PopOverActionContent from "../Actions/PopOverActionContent";

const CommodityDesktopCard = ({
  commodityData,
  index,
  page,
}: ICommodityDesktopCard) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const togglePopover = useCallback(() => {
    setIsPopoverOpen((prev) => !prev);
  }, []);

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
          <p>
            {commodityData.area_provinsi ? commodityData.area_provinsi : "-"}
          </p>
        </div>
        <div>
          <p>{commodityData.area_kota ? commodityData.area_kota : "-"}</p>
        </div>

        <div onClick={() => setIsPopoverOpen((prev) => !prev)}>
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
        <Popover
          isOpen={isPopoverOpen}
          reposition={false}
          onClickOutside={() => setIsPopoverOpen(false)}
          content={<PopOverActionContent commodityData={commodityData} />}
          positions={["left"]}
        >
          <div onClick={togglePopover} className={style.commodity_option}>
            <BsThreeDotsVertical />
          </div>
        </Popover>
      </div>
    </div>
  );
};

export default CommodityDesktopCard;
