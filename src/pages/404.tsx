import style from "../styles/index.module.scss";
import React from "react";

const NotFound = () => {
  return (
    <div className={style.not_found}>
      <h1>404</h1>
      <p>Not Found</p>
    </div>
  );
};

export default NotFound;
