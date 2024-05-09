import React from "react";
import style from "./PopUpActionContent.module.scss";
import { usePopup } from "@/store/usePopUp";
import { motion, PanInfo } from "framer-motion";
import Link from "next/link";
import { IEditConfirmation } from "@/interfaces/components";
import { useModal } from "@/store/useModal";
import DeleteConfirmation from "./DeleteConfirmation";
import { FaEdit, FaEye } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";

const PopUpActionContent = ({ payload }: IEditConfirmation) => {
  const { hidePopup } = usePopup();
  const { showModal } = useModal();

  const onOpenDeleteModal = () => {
    showModal(<DeleteConfirmation payload={payload} />);
    hidePopup();
  };

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
      className={`${style.popup_content_container} ${style.bg_white}`}
    >
      <div className={style.dragable_area}>
        <button />
      </div>
      <div className={style.options_box}>
        <Link href={`/commodity/detail/${payload.uuid}`} onClick={hidePopup}>
          <div>
            <FaEye />
            View
          </div>
        </Link>
        <Link href={`/commodity/edit/${payload.uuid}`} onClick={hidePopup}>
          <div>
            <FaEdit />
            Edit
          </div>
        </Link>
        <div onClick={onOpenDeleteModal}>
          <FaTrash />
          Delete
        </div>
      </div>
    </motion.div>
  );
};

export default PopUpActionContent;
