import CommodityList from "@/components/Commodities/CommodityList";
import { renderWithClient } from "@/Wrapper/Wrapper";
import { QueryClient } from "@tanstack/react-query";
import { screen } from "@testing-library/react";

describe("CommodityList Component Test", () => {
  it("Should render list komoditas", async () => {
    const queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          retry: false,
        },
      },
    });

    renderWithClient(queryClient, <CommodityList />);

    const title = screen.getByText("List Komoditas");
    expect(title).toBeInTheDocument();
  });
});
