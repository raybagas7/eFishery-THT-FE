import React from "react";
import style from "./toast-component.module.scss";
import classNames from "classnames";
import { RiCheckboxCircleLine, RiCloseCircleLine } from "react-icons/ri";

interface IToastComponent {
  variant?: "success" | "error";
  message?: string;
}

const ToastComponent = ({
  variant = "success",
  message = "Toast!",
}: IToastComponent) => {
  const toastStyles = classNames({
    [style.toast_success]: variant === "success",
    [style.bg_primary_light_9]: variant === "success",
    [style.toast_error]: variant === "error",
    [style.bg_error_light_9]: variant === "error",
  });

  return (
    <div className={toastStyles}>
      {variant === "success" && <RiCheckboxCircleLine />}
      {variant === "error" && <RiCloseCircleLine />}
      {message}
    </div>
  );
};

export default ToastComponent;
