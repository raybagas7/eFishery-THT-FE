import React from "react";
import style from "./spinner.module.scss";

const Spinner = () => {
  return (
    <div className={style.lds_ripple}>
      <div></div>
      <div></div>
    </div>
  );
};

export default Spinner;
