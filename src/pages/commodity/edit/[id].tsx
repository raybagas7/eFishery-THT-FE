import MainLayout from "@/components/Layout/MainLayout";
import React, { ReactElement } from "react";

const EditCommodity = () => {
  return <div>EditCommodity</div>;
};

export default EditCommodity;

EditCommodity.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
