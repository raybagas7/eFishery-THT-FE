import React, { useEffect } from "react";
import InputUi from "../ui/input-ui";
import Button from "../ui/button";
import { FaSearch } from "react-icons/fa";
import style from "./CommoditySearch.module.scss";
import { ICommoditySearch } from "@/interfaces/components";
import SelectUi from "../ui/select-ui";
import { motion, useAnimation } from "framer-motion";

const CommoditySearch = ({
  handleSearch,
  search,
  handleSearchSubmit,
  disabled,
  handleSelect,
}: ICommoditySearch) => {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 72) {
        controls.start({
          backgroundColor: "white",
          padding: "5px 10px",
          borderBottomRightRadius: "12px",
          borderBottomLeftRadius: "12px",
          boxShadow: ` 0 1px 3px 0 rgba(12, 12, 12, 0.25),
    0 1px 2px -1px rgba(0, 0, 0, 0.25)`,
        });
      } else {
        controls.start({
          backgroundColor: "transparent",
          padding: "none",
          borderRadius: "none",
          boxShadow: "none",
          borderBottomRightRadius: "none",
          borderBottomLeftRadius: "none",
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

  const options = [
    { value: "komoditas", label: "Komoditas" },
    { value: "area_provinsi", label: "Provinsi" },
    { value: "area_kota", label: "Kota" },
    { value: "size", label: "Ukuran" },
    { value: "price", label: "Harga" },
  ];
  return (
    <motion.div animate={controls} className={style.search_container}>
      <p className={style.category_search_label}>Search By</p>
      <form className={style.search_box} onSubmit={handleSearchSubmit}>
        <div className={style.select_wrapper}>
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
    </motion.div>
  );
};

export default CommoditySearch;
