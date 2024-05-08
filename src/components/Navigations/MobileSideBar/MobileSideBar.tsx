import React, { useEffect, useState } from "react";
import MobileNavigation from "../MobileNavigation/MobileNavigation";
import style from "./MobileSideBar.module.scss";
import { motion, useAnimationControls } from "framer-motion";
import Image from "next/image";

const MobileSideBar = () => {
  const [asideHide, setAsideHide] = useState<boolean | undefined>();

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
      <MobileNavigation toggleAside={toggleAside} />
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
          <Image
            src={"/efishery.png"}
            width={200}
            height={50}
            alt="efish_banner"
          />
        </motion.div>
      </motion.div>
    </>
  );
};

export default MobileSideBar;
