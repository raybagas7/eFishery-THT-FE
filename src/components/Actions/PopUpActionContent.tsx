import React from "react";
import style from "./PopUpActionContent.module.scss";
import { usePopup } from "@/store/usePopUp";
import { motion, PanInfo } from "framer-motion";
import Link from "next/link";

const PopUpActionContent = () => {
  const { hidePopup } = usePopup();

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    // Check if the dragged position is below a certain threshold
    if (info.point.y > 800) {
      // Call hidePopup function if dragged below threshold
      hidePopup();
    }
  };
  return (
    <motion.div
      animate={{ y: [100, 0] }}
      transition={{ type: "just" }}
      drag="y"
      dragConstraints={{
        top: 0,
        bottom: 10,
      }}
      dragElastic={{
        top: 0,
        bottom: 1,
      }}
      onDragEnd={handleDragEnd}
      className={`${style.popup_content_container} ${style.bg_primary_light_5}`}
    >
      <div className={style.dragable_area}>
        <button />
      </div>
      <div className={style.options_box}>
        <Link href={"/commodity/detail/id"}>View</Link>
        <Link href={"/commodity/edit/id"}>Edit</Link>
        <Link href={"/delete"}>Delete</Link>
      </div>
    </motion.div>
  );
};

export default PopUpActionContent;
