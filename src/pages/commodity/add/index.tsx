import MainLayout from "@/components/Layout/MainLayout";
import React, { ReactElement } from "react";
import style from "@/styles/index.module.scss";
import AddCommodityForm from "@/components/Forms/AddCommodityForm";
import Modal from "@/components/ui/modal";

const AddCommodity = () => {
  // const options = [
  //   { value: "chocolate", label: "Chocolate" },
  //   { value: "strawberry", label: "Strawberry" },
  //   { value: "vanilla", label: "Vanilla" },
  // ];
  return (
    <>
      <Modal backDropClose />
      <div className={style.main_container}>
        <AddCommodityForm />
      </div>
    </>
  );
};

export default AddCommodity;

AddCommodity.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
