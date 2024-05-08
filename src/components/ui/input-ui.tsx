import { InputProps } from "@/interfaces/components";
import React, { FC } from "react";
import style from "./input-ui.module.scss";

const InputUi: FC<InputProps> = ({ icon, name, type, value, ...rest }) => {
  return (
    <div className={style.input_container}>
      <label htmlFor={name}> {name}</label>
      <input
        type={type}
        id={name}
        className={style.input_box}
        value={value}
        {...rest}
      />
      {icon}
    </div>
  );
};

export default InputUi;