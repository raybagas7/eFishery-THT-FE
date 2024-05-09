import React from "react";
import style from "./TopNavigation.module.scss";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { ITopNavigation } from "@/interfaces/components";
import Link from "next/link";

const TopNavigation = ({ toggleAside }: ITopNavigation) => {
  return (
    <div className={style.top_nav_container}>
      <div className={style.box}>
        <Link href={"/"}>
          <Image
            src={"/icon-192x192.png"}
            width={36}
            height={36}
            alt="eFishery Icon"
          />
        </Link>

        <GiHamburgerMenu onClick={toggleAside} className={style.hamburger} />
      </div>
    </div>
  );
};

export default TopNavigation;
