import MainLayout from "@/components/Layout/MainLayout";
import React, { ReactElement } from "react";

const AddCommodity = () => {
  return <div>AddCommodity</div>;
};

export default AddCommodity;

AddCommodity.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
