import React from "react";
import style from "./MobileNavigation.module.scss";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";

const MobileNavigation = () => {
  return (
    <div className={style.mobile_nav_container}>
      <div className={style.box}>
        <Image
          src={"/icon-192x192.png"}
          width={50}
          height={50}
          alt="eFishery Icon"
        />
        <GiHamburgerMenu className={style.hamburger} />
      </div>
    </div>
  );
};

export default MobileNavigation;