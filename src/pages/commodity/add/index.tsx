import MainLayout from "@/components/Layout/MainLayout";
import React, { ReactElement } from "react";
import style from "@/styles/index.module.scss";
import Calendar from "@/components/ui/calendar";

const AddCommodity = () => {
  return (
    <div className={style.main_container}>
      <Calendar />
    </div>
  );
};

export default AddCommodity;

AddCommodity.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
