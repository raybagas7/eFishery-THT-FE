import { InputProps } from "@/interfaces/components";
import React, { FC } from "react";
import style from "./input-ui.module.scss";

const InputUi: FC<InputProps> = ({ icon, name, type, ...rest }) => {
  return (
    <div className={style.input_container}>
      <label htmlFor={name}> {name}</label>
      <input type={type} id={name} name={name} {...rest} />
      {icon}
    </div>
  );
};

export default InputUi;
