import { useCommodityList } from "@/hooks/useCommodityList";
import React, { useState } from "react";
import style from "./CommodityList.module.scss";
import Button from "../ui/button";
import CommodityCard from "./CommodityCard";
import Link from "next/link";
import { RiFilter2Line, RiUserAddLine } from "react-icons/ri";
import Spinner from "../ui/spinner";
import Ellipsis from "../ui/ellipsis";
import InputUi from "../ui/input-ui";
import { FaSearch } from "react-icons/fa";

const CommodityList = () => {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const { isPending, isError, data, isFetching, fetchNextPage, hasNextPage } =
    useCommodityList(query);

  const handleLoadMore = () => {
    fetchNextPage();
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setQuery(search.toUpperCase());
  };

  if ((isPending && !data) || isFetching) {
    return (
      <>
        <div className={style.spinner_box}>
          <Spinner />
        </div>
      </>
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
      <form className={style.search_box} onSubmit={handleSearchSubmit}>
        <div className={style.input_wrapper}>
          <InputUi
            id="search"
            placeholder="Cari komoditas"
            variant="small"
            value={search}
            onChange={handleSearch}
          />
        </div>
        <div className={style.submit_button_wrapper}>
          <Button size="small" variant="outline" type="submit">
            <div className={style.button_child}>
              Search
              <FaSearch />
            </div>
          </Button>
        </div>
      </form>
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
              isFetching ? (
                <div className={style.loading_box}>
                  <Ellipsis />
                </div>
              ) : (
                <Button onClick={handleLoadMore} variant="outline" size="small">
                  Load More
                </Button>
              )
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
