import MainLayout from "@/components/Layout/MainLayout";
import React, { ReactElement } from "react";

const DetailCommodity = () => {
  return <div>DetailCommodity</div>;
};

export default DetailCommodity;

DetailCommodity.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
