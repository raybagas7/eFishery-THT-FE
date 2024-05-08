"use clients";
import { useCommodityList } from "@/hooks/useCommodityList";
import React from "react";
import style from "./CommodityList.module.scss";
import Button from "../ui/button";
import CommodityCard from "./CommodityCard";
import Link from "next/link";
import { RiFilter2Line, RiUserAddLine } from "react-icons/ri";

const CommodityList = () => {
  const { isPending, isError, data, isFetching, fetchNextPage, hasNextPage } =
    useCommodityList();

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
      <div className={style.page_header_box}>
        <h1>Commodity List</h1>
        <div className={style.action_box}>
          <RiFilter2Line />
          <Link href={"/commodity/add"}>
            <RiUserAddLine />
          </Link>
        </div>
      </div>
      <div className={style.commodities_contaier}>
        {data.pages.map((page) => {
          return (
            <ul key={page.currentPage}>
              {page?.data?.map(
                (commodity) =>
                  commodity.uuid && (
                    <CommodityCard
                      commodityData={commodity}
                      key={commodity.uuid}
                    />
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
