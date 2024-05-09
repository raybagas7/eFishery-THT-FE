import React, { useEffect, useState } from "react";
import style from "./MobileSideBar.module.scss";
import { motion, useAnimationControls } from "framer-motion";
import Image from "next/image";
import ListNavigation from "../ListNavigation/ListNavigation";
import { BiPlus } from "react-icons/bi";
import { FaFish, FaShrimp } from "react-icons/fa6";
import TopNavigation from "../TopNavigation/TopNavigation";
import Link from "next/link";
import { RiListOrdered } from "react-icons/ri";
import { SiCodefresh } from "react-icons/si";

const MobileSideBar = () => {
  const [asideHide, setAsideHide] = useState<boolean | undefined>();
  const [activePage, setActivePage] = useState<string>("list");
  const onChangeNav = async (path: string) => {
    setActivePage(path);
    setAsideHide(false);
  };

  const containerVariants = {
    close: {
      opacity: 0,
      transitionEnd: {
        display: "none",
      },
    },
    open: {
      opacity: 1,
      display: "block",
    },
  };

  const sideBar = {
    close: {
      x: "-300%",
    },
    open: {
      x: "0%",
    },
  };

  const containerAnimationControls = useAnimationControls();

  useEffect(() => {
    if (asideHide) {
      containerAnimationControls.start("open");
    } else {
      containerAnimationControls.start("close");
    }
  }, [asideHide]);

  const toggleAside = () => {
    setAsideHide((prev) => !prev);
  };

  return (
    <>
      <TopNavigation toggleAside={toggleAside} />
      <motion.div
        variants={containerVariants}
        animate={containerAnimationControls}
        initial="close"
        onClick={toggleAside}
        className={style.backdrop_container}
      >
        <motion.div
          variants={sideBar}
          transition={{ type: "just" }}
          animate={containerAnimationControls}
          initial="close"
          onClick={(e) => e.stopPropagation()}
          className={style.mobile_sidebar_container}
        >
          <Link href={"/"}>
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
                name="List Komoditas"
                to="/"
                icon={<RiListOrdered />}
                onClick={() => onChangeNav("list")}
                isActive={activePage === "list"}
              />
              <ListNavigation
                name="Tambah Komoditas"
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
                icon={<SiCodefresh />}
                onClick={() => onChangeNav("efresh")}
                isActive={activePage === "efresh"}
              />
            </ul>
          </nav>
        </motion.div>
      </motion.div>
    </>
  );
};

export default MobileSideBar;
