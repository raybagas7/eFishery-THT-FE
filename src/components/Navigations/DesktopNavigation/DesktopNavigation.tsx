import React from "react";
import style from "./DesktopNavigation.module.scss";
import MobileSideBar from "../MobileSideBar/MobileSideBar";
import Image from "next/image";

const DesktopNavigation = () => {
  return (
    <>
      <MobileSideBar />
      <aside className={style.desktop_nav_container}>
        <div className={style.desktop_nav_box}>
          <div className={style.banner_box}>
            <Image
              src={"/efishery.png"}
              width={200}
              height={50}
              alt="efish_banner"
            />
          </div>
          <nav className={style.navigation}>
            <ul></ul>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default DesktopNavigation;
