import MainLayout from "@/components/Layout/MainLayout";
import { IDetailCommodity } from "@/interfaces/components";
import { GetServerSideProps } from "next";
import React, { ReactElement } from "react";
import style from "@/styles/index.module.scss";
import CommodityDetail from "@/components/Container/CommodityDetail";
import Head from "next/head";

const DetailCommodity = ({ commodityData }: IDetailCommodity) => {
  return (
    <>
      <Head>
        <title>{`${commodityData.komoditas} - ${commodityData.area_kota} | eFishery`}</title>
        <meta name="efishery" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={style.main_container}>
        <CommodityDetail commodityData={commodityData} />
      </main>
    </>
  );
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

  return {
    props: {
      commodityData: commodity[0],
    },
  };
};
