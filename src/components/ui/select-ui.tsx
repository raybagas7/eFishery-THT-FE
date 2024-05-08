import React from "react";
import Select from "react-select";
import style from "./select-ui.module.scss";

interface ISelecUi {
  options?: { value: string; label: string }[];
}
const SelectUi = ({ options }: ISelecUi) => {
  return (
    <div className={style.select_input}>
      <Select
        options={options}
        styles={{
          option: (baseStyles, state) => ({
            ...baseStyles,
            cursor: "pointer",
            ":hover": {
              backgroundColor: "#4dc7a8",
            },
            backgroundColor: state.isFocused ? "#4dc7a8" : "",
            color: state.isFocused ? "white" : "black",
          }),
          dropdownIndicator: (baseStyles) => ({
            ...baseStyles,
            cursor: "pointer",
          }),
          input: (baseStyles) => ({
            ...baseStyles,
            cursor: "pointer",
          }),
        }}
      />
    </div>
  );
};

export default SelectUi;
