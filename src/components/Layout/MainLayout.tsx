import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { IUserSellerLayout } from "@/interfaces/components";
import style from "./MainLayout.module.scss";
import DesktopNavigation from "../Navigations/DesktopNavigation/DesktopNavigation";

function MainLayout({ children }: IUserSellerLayout) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5,
      },
    },
  });

  return (
    <div className={style.main_layout}>
      <DesktopNavigation />
      <QueryClientProvider client={queryClient}>
        <div className={style.children_container}>{children}</div>
      </QueryClientProvider>
    </div>
  );
}

export default MainLayout;
