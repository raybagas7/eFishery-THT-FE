import { useCommodityList } from "@/hooks/useCommodityList";
import React, { useState } from "react";
import style from "./CommodityList.module.scss";
import Button from "../ui/button";
import CommodityCard from "./CommodityCard";
import Link from "next/link";
import Spinner from "../ui/spinner";
import Ellipsis from "../ui/ellipsis";
import CommoditySearch from "./CommoditySearch";
import CommodityEmpty from "./CommodityEmpty";
import { IoMdAdd } from "react-icons/io";
import CommodityTitle from "./CommodityTitle";
import DeletedCommodityCard from "./DeletedCommodityCard";
import { Virtuoso } from "react-virtuoso";

const CommodityList = () => {
  const [search, setSearch] = useState("");
  const [select, setSelect] = useState("komoditas");
  const [key, setKey] = useState("");
  const [query, setQuery] = useState("");
  const { isPending, isError, data, isFetching, fetchNextPage, hasNextPage } =
    useCommodityList(key, query);

  const handleLoadMore = () => {
    fetchNextPage();
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleSelect = (value: string) => {
    console.log(value);
    setSelect(value);
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    setQuery(search.toUpperCase());
    setKey(select);
  };

  if (isError) {
    return (
      <div>
        <h2>Error Happen to Our Server</h2>
        <p>Please comeback later</p>
      </div>
    );
  }

  return (
    <section className={style.commodities_section}>
      <div className={style.page_header_box}>
        <h1>List Komoditas</h1>
        <div className={style.action_box}>
          <Link href={"/commodity/add"}>
            <Button size="small">
              Tambah Komoditas
              <IoMdAdd />
            </Button>
          </Link>
        </div>
      </div>
      <CommoditySearch
        search={search}
        handleSearch={handleSearch}
        handleSearchSubmit={handleSearchSubmit}
        disabled={isPending || isFetching}
        handleSelect={handleSelect}
        select={select}
      />
      <CommodityTitle />
      {isPending && !data ? (
        <div className={style.spinner_box}>
          <Spinner />
        </div>
      ) : (
        <div className={style.commodities_contaier}>
          {data.pages[0].data.length > 0 ? (
            <Virtuoso
              data={data.pages}
              itemContent={(pageIndex, commodity) => {
                return (
                  <ul key={commodity.currentPage}>
                    {commodity?.data?.map((commodity, index) =>
                      commodity.uuid ? (
                        <CommodityCard
                          index={index}
                          page={pageIndex}
                          commodityData={commodity}
                          key={commodity.uuid}
                        />
                      ) : (
                        <DeletedCommodityCard
                          index={index}
                          page={pageIndex}
                          key={index + pageIndex}
                        />
                      ),
                    )}
                  </ul>
                );
              }}
              useWindowScroll
            />
          ) : (
            <CommodityEmpty />
          )}

          <div className={style.button_box}>
            {(data.pages[0].data.length > 0 &&
              (hasNextPage &&
              data.pages[data.pages.length - 1].data.length > 9 ? (
                isFetching ? (
                  <div className={style.loading_box}>
                    <Ellipsis />
                  </div>
                ) : (
                  <Button
                    onClick={handleLoadMore}
                    variant="outline"
                    size="small"
                  >
                    Load More
                  </Button>
                )
              ) : (
                <p className="py-5 text-[16px] font-[600] leading-6">
                  {`Sudah mencapai akhir halaman`}
                </p>
              ))) ??
              null}
          </div>
        </div>
      )}
    </section>
  );
};

export default CommodityList;
