import React from "react";
import style from "./DesktopNavigation.module.scss";
import MobileSideBar from "../MobileSideBar/MobileSideBar";

const DesktopNavigation = () => {
  return (
    <>
      <MobileSideBar />
      <div className={style.desktop_nav_container}>DesktopNavigation</div>
    </>
  );
};

export default DesktopNavigation;
