import React, { useState } from "react";
import style from "./DesktopNavigation.module.scss";
import MobileSideBar from "../MobileSideBar/MobileSideBar";
import Image from "next/image";
import ListNavigation from "../ListNavigation/ListNavigation";
import { BiPlus } from "react-icons/bi";
import { FaFish, FaShrimp } from "react-icons/fa6";
import { RiListOrdered } from "react-icons/ri";
import { SiCodefresh } from "react-icons/si";
import Link from "next/link";

const DesktopNavigation = () => {
  const [activePage, setActivePage] = useState<string>("list");
  const onChangeNav = async (path: string) => {
    setActivePage(path);
  };

  return (
    <>
      <MobileSideBar />
      <aside className={style.desktop_nav_container}>
        <div className={style.desktop_nav_box}>
          <Link href={"/"} className={style.banner_box}>
            <Image
              src={"/efishery.png"}
              width={200}
              height={50}
              alt="efish_banner"
            />
          </Link>
          <nav className={style.navigation}>
            <ul>
              <ListNavigation
                name="Commodity list"
                to="/"
                icon={<RiListOrdered />}
                onClick={() => onChangeNav("list")}
                isActive={activePage === "list"}
              />
              <ListNavigation
                name="Add Commodity"
                to="/commodity/add"
                icon={<BiPlus />}
                onClick={() => onChangeNav("add")}
                isActive={activePage === "add"}
              />
              <ListNavigation
                name="Shrimp"
                to="/"
                icon={<FaShrimp />}
                onClick={() => onChangeNav("edit")}
                isActive={activePage === "edit"}
              />
              <ListNavigation
                name="Fish"
                to="/"
                icon={<FaFish />}
                onClick={() => onChangeNav("fish")}
                isActive={activePage === "fish"}
              />
              <ListNavigation
                name="eFresh"
                to="/"
                icon={<SiCodefresh />}
                onClick={() => onChangeNav("efresh")}
                isActive={activePage === "efresh"}
              />
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default DesktopNavigation;
