import React from "react";
import style from "./ellipsis.module.scss";
import classNames from "classnames";

interface IEllipsis {
  variant?: "primary" | "white";
}

const Ellipsis = ({ variant = "primary" }: IEllipsis) => {
  const elipsis = classNames({
    [style.dot_windmill]: variant === "primary",
    [style.dot_windmill_white]: variant === "white",
  });
  return <div className={elipsis}></div>;
};

export default Ellipsis;
