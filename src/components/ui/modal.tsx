import React from "react";
import { IModalProps } from "@/interfaces/components";
import { useModal } from "@/store/useModal";
import style from "./modal.module.scss";

const Modal = ({ component, backDropClose }: IModalProps) => {
  const { isShowModal, content, hideModal } = useModal();

  if (!isShowModal) {
    return null;
  }

  const clickOutSide = (e: any) => {
    e.stopPropagation();
  };

  return (
    <div
      onClick={backDropClose ? hideModal : () => {}}
      className={style.modal_backdrop}
    >
      <div onClick={(e) => clickOutSide(e)}>
        {component && component}
        {content}
      </div>
    </div>
  );
};

export default Modal;
