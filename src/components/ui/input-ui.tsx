import { InputProps } from "@/interfaces/components";
import React, { FC } from "react";
import style from "./input-ui.module.scss";
import classNames from "classnames";

const InputUi: FC<InputProps> = ({
  icon,
  name,
  type,
  variant = "base",
  ...rest
}) => {
  const inputStyle = classNames({
    [style.input_container_base]: variant === "base",
    [style.input_container_sm]: variant === "small",
  });

  return (
    <div className={inputStyle}>
      {name && <label htmlFor={name}> {name}</label>}
      <input type={type} id={name} name={name} {...rest} />
      {icon}
    </div>
  );
};

export default InputUi;
