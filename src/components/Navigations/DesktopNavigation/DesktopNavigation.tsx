import React from "react";
import style from "./DesktopNavigation.module.scss";
import MobileNavigation from "../MobileNavigation/MobileNavigation";

const DesktopNavigation = () => {
  return (
    <>
      <MobileNavigation />
      <div className={style.desktop_nav_container}>DesktopNavigation</div>
    </>
  );
};

export default DesktopNavigation;
