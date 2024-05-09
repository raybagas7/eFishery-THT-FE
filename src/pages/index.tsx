import Head from "next/head";
import style from "../styles/index.module.scss";
import CommodityList from "@/components/Commodities/CommodityList";
import MainLayout from "@/components/Layout/MainLayout";
import { ReactElement } from "react";
import PopUp from "@/components/ui/popup";
import Modal from "@/components/ui/modal";


export default function Home() {
  return (
    <>
      <Head>
        <title>Commodity List | eFishery</title>
        <meta name="efishery" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Modal backDropClose />
      <PopUp backDropClose />
      <main className={style.main_container}>
        <CommodityList />
      </main>
    </>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
