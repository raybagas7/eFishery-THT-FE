import MainLayout from "@/components/Layout/MainLayout";
import React, { ReactElement } from "react";
import style from "@/styles/index.module.scss";
import Calendar from "@/components/ui/calendar";
import SelectUi from "@/components/ui/select-ui";

const AddCommodity = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return (
    <div className={style.main_container}>
      <Calendar />
      <SelectUi options={options} />
    </div>
  );
};

export default AddCommodity;

AddCommodity.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
