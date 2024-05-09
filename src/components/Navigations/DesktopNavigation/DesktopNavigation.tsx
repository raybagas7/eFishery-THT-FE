import React, { useState } from "react";
import style from "./DesktopNavigation.module.scss";
import MobileSideBar from "../MobileSideBar/MobileSideBar";
import Image from "next/image";
import ListNavigation from "../ListNavigation/ListNavigation";
import { FiShare } from "react-icons/fi";
import { BiPlus } from "react-icons/bi";
import { FaFish, FaShrimp } from "react-icons/fa6";

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
          <div className={style.banner_box}>
            <Image
              src={"/efishery.png"}
              width={200}
              height={50}
              alt="efish_banner"
            />
          </div>
          <nav className={style.navigation}>
            <ul>
              <ListNavigation
                name="Commodity list"
                to="/"
                icon={<FiShare />}
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
                name="Shrim"
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
                icon={<FaFish />}
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
