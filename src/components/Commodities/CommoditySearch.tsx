import React from "react";
import InputUi from "../ui/input-ui";
import Button from "../ui/button";
import { FaSearch } from "react-icons/fa";
import style from "./CommoditySearch.module.scss";
import { ICommoditySearch } from "@/interfaces/components";

const CommoditySearch = ({
  handleSearch,
  search,
  handleSearchSubmit,
}: ICommoditySearch) => {
  return (
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
  );
};

export default CommoditySearch;
