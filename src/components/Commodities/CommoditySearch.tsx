import React from "react";
import InputUi from "../ui/input-ui";
import Button from "../ui/button";
import { FaSearch } from "react-icons/fa";
import style from "./CommoditySearch.module.scss";
import { ICommoditySearch } from "@/interfaces/components";
import SelectUi from "../ui/select-ui";

const CommoditySearch = ({
  handleSearch,
  search,
  handleSearchSubmit,
  disabled,
  handleSelect,
}: ICommoditySearch) => {
  const options = [
    { value: "komoditas", label: "Komoditas" },
    { value: "area_provinsi", label: "Provinsi" },
    { value: "area_kota", label: "Kota" },
    { value: "size", label: "Ukuran" },
    { value: "price", label: "Harga" },
  ];
  return (
    <form className={style.search_box} onSubmit={handleSearchSubmit}>
      <div className={style.select_wrapper}>
        <p>Search By</p>
        <SelectUi
          isDisabled={disabled}
          options={options}
          onChange={(e) => handleSelect(e?.value as string)}
          defaultValue={{ value: "komoditas", label: "Komoditas" }}
          styles={{
            container: (baseStyles) => ({
              ...baseStyles,
              fontSize: "12px",
            }),
            dropdownIndicator: (baseStyles) => ({
              ...baseStyles,
              cursor: "pointer",
            }),
            input: (baseStyles) => ({
              ...baseStyles,
              fontSize: "12px",
              cursor: "pointer",
            }),
            option: (baseStyles, state) => ({
              ...baseStyles,
              cursor: "pointer",
              ":hover": {
                backgroundColor: "#4dc7a8",
              },
              backgroundColor: state.isFocused ? "#4dc7a8" : "",
              color: state.isFocused ? "white" : "black",
            }),
          }}
        />
      </div>
      <div className={style.input_wrapper}>
        <InputUi
          id="search"
          placeholder="Cari komoditas"
          variant="small"
          value={search}
          onChange={handleSearch}
          disabled={disabled}
        />
      </div>
      <div className={style.submit_button_wrapper}>
        <Button
          disabled={disabled}
          size="small"
          variant="outline"
          type="submit"
        >
          <div className={style.button_child}>
            Cari
            <FaSearch />
          </div>
        </Button>
      </div>
    </form>
  );
};

export default CommoditySearch;
