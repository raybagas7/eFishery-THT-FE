import MainLayout from "@/components/Layout/MainLayout";
import { IDetailCommodity } from "@/interfaces/components";
import { GetServerSideProps } from "next";
import Head from "next/head";
import React, { ReactElement } from "react";
import style from "@/styles/index.module.scss";
import Modal from "@/components/ui/modal";
import CommodityForm from "@/components/Forms/CommodityForm";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

const EditCommodity = ({ commodityData }: IDetailCommodity) => {
  return (
    <>
      <Head>
        <title>{`Edit ${commodityData.komoditas} - ${commodityData.area_kota} | eFishery`}</title>
        <meta name="efishery" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Modal backDropClose />
      <main className={style.main_container}>
        <div className={style.main_header_box}>
          <Link href={"/"}>
            <div>
              <FaArrowLeft />
            </div>
          </Link>
          <h1>Edit Komoditas</h1>
        </div>
        <CommodityForm commodityData={commodityData} crud="edit" />
      </main>
    </>
  );
};

export default EditCommodity;

EditCommodity.getLayout = function getLayout(page: ReactElement) {
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
