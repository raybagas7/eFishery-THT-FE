import MainLayout from "@/components/Layout/MainLayout";
import { IDetailCommodity } from "@/interfaces/components";
import { GetServerSideProps } from "next";
import React, { ReactElement } from "react";

const DetailCommodity = ({ commodityData }: IDetailCommodity) => {
  console.log(commodityData);

  return <div>DetailCommodity</div>;
};

export default DetailCommodity;

DetailCommodity.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export const getServerSideProps: GetServerSideProps = async ({
  params,
}: any) => {
  const response = await fetch(
    `${process.env.BASE_API_URL}/list?search={"uuid":"${params.id}"}`,
  );

  if (!params || !params.id || response.status === 404) {
    return {
      notFound: true,
    };
  }

  const commodity = await response.json();

  if (commodity.length === 0) {
    return {
      notFound: true,
    };
  }
  console.log(commodity);

  return {
    props: {
      commodityData: commodity,
    },
  };
};
