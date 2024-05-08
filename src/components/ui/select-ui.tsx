import React from "react";
import type {} from "react-select/base";
import Select, { Props as SelecProps } from "react-select";
import { GroupBase } from "react-select";
import style from "./select-ui.module.scss";

interface CustomSelectProps {
  name?: string;
}

function SelectUi<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>(props: SelecProps<Option, IsMulti, Group> & CustomSelectProps) {
  return (
    <div className={style.select_input}>
      <label htmlFor={props.name}>{props.name}</label>
      <Select
        id={props.name}
        styles={{
          placeholder: (baseStyles) => ({
            ...baseStyles,
            fontSize: "14px",
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
          dropdownIndicator: (baseStyles) => ({
            ...baseStyles,
            cursor: "pointer",
          }),
          input: (baseStyles) => ({
            ...baseStyles,
            cursor: "pointer",
          }),
        }}
        {...props}
      />
    </div>
  );
}

export default SelectUi;
