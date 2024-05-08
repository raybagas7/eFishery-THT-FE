"use clients";
import { useCommodityList } from "@/hooks/useCommodityList";
import React from "react";
import style from "./CommodityList.module.scss";
import Button from "../ui/button";
import { BsThreeDotsVertical } from "react-icons/bs";
import { formatDate } from "@/libs/utils";
import { usePopup } from "@/store/usePopUp";
import PopUpActionContent from "../Actions/PopUpActionContent";

const CommodityList = () => {
  const { showPopup } = usePopup();
  const { isPending, isError, data, isFetching, fetchNextPage, hasNextPage } =
    useCommodityList();

  const onOptionClick = () => {
    showPopup(<PopUpActionContent />);
  };

  const handleLoadMore = () => {
    fetchNextPage();
  };

  if (isPending && !data) {
    return (
      <div>
        <p>PENDING</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <h2>Error Happen to Our Server</h2>
        <p>Please comeback later</p>
      </div>
    );
  }

  console.log(data);

  return (
    <section className={style.commodities_section}>
      <div className={style.commodities_contaier}>
        {data.pages.map((page) => {
          return (
            <ul key={page.currentPage}>
              {page?.data?.map(
                (commodity, index) =>
                  commodity.uuid && (
                    <li key={`${commodity}-${index}`}>
                      <div className={style.commodity_box}>
                        <div className={style.commodity_head}>
                          <p>
                            {commodity.komoditas} -
                            {commodity.area_kota
                              ? commodity.area_kota
                              : "Unknown"}
                          </p>
                          <p>
                            {formatDate(
                              new Date(commodity.tgl_parsed),
                              "short",
                            )}
                          </p>
                        </div>
                        <BsThreeDotsVertical
                          className={style.commodity_option}
                          onClick={onOptionClick}
                        />
                      </div>
                    </li>
                  ),
              )}
            </ul>
          );
        })}

        <div className={style.button_box}>
          {(data.pages[0].data.length > 0 &&
            (hasNextPage &&
            data.pages[data.pages.length - 1].data.length > 9 ? (
              <Button onClick={handleLoadMore} variant="outline" size="small">
                {isFetching ? "Loading..." : "Load More"}
              </Button>
            ) : (
              <p className="py-5 text-[16px] font-[600] leading-6">
                {`You've hit the end of the page`}
              </p>
            ))) ??
            null}
        </div>
      </div>
    </section>
  );
};

export default CommodityList;
