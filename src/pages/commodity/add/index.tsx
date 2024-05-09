import MainLayout from "@/components/Layout/MainLayout";
import React, { ReactElement } from "react";
import style from "@/styles/index.module.scss";
import Modal from "@/components/ui/modal";
import CommodityForm from "@/components/Forms/CommodityForm";

const AddCommodity = () => {
  return (
    <>
      <Modal backDropClose />
      <main className={style.main_container}>
        <CommodityForm crud="add" />
      </main>
    </>
  );
};

export default AddCommodity;

AddCommodity.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
