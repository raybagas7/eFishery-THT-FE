import React from "react";
import { motion } from "framer-motion";
import { usePopup } from "@/store/usePopUp";
import style from "./popup.module.scss";

interface IPopUpMobile {
  backDropClose?: boolean;
  component?: React.ReactNode;
}

const PopUp = ({ component, backDropClose }: IPopUpMobile) => {
  const { isShowPopup, content, hidePopup } = usePopup();

  if (!isShowPopup) {
    return null;
  }

  const clickOutSide = (e: any) => {
    e.stopPropagation();
  };

  return (
    <motion.div
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 0.3 }}
      data-testid="dayatani-popup"
      onClick={backDropClose ? hidePopup : () => {}}
      className={style.popup_backdrop}
    >
      <div onClick={(e) => clickOutSide(e)} className={style.popup_content}>
        {component && component}
        {content}
      </div>
    </motion.div>
  );
};

export default PopUp;
