import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { IUserSellerLayout } from "@/interfaces/components";

function MainLayout({ children }: IUserSellerLayout) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5,
      },
    },
  });
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <div>{children}</div>
      </QueryClientProvider>
    </div>
  );
}

export default MainLayout;
