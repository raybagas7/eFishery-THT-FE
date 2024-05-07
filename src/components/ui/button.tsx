import React from "react";
import style from "./button.module.scss";
import classNames from "classnames";
import { IButtonProps } from "@/interfaces/components";

const Button = ({
  children,
  variant = "primary",
  size = "base",
  ...props
}: IButtonProps) => {
  const variantClasses = {
    primary: [style.button_primary, style.text_white],
    secondary: [style.button_secondary, style.text_black],
    destructive: [style.button_error, style.text_white],
    outline: [style.button_outline, style.text_primary],
  };

  const sizeClasses = {
    small: [style.button_sm],
    base: [style.button_base],
    large: [style.button_lg],
  };

  const buttonContainerClass = classNames(
    style.button,
    variantClasses[`${variant}`],
    sizeClasses[`${size}`],
  );
  return (
    <button {...props} className={`${buttonContainerClass}`}>
      {children}
    </button>
  );
};

export default Button;
