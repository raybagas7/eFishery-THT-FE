import { Commodity } from "@/types/alltypes";
import React from "react";
import style from "./PopOverActionContent.module.scss";
import { FaEdit, FaEye } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";
import Link from "next/link";

const PopOverActionContent = ({
  commodityData,
}: {
  commodityData: Commodity;
}) => {
  return (
    <div className={style.popover_content_container}>
      <Link href={`/commodity/detail/${commodityData.uuid}`}>
        <div>
          <FaEye />
          <span>View</span>
        </div>
      </Link>
      <Link href={`/commodity/edit/${commodityData.uuid}`}>
        <div className={style.edit_box}>
          <FaEdit />
          <span>Edit</span>
        </div>
      </Link>
      <div>
        <FaTrash />
        <span>Delete</span>
      </div>
    </div>
  );
};

export default PopOverActionContent;
