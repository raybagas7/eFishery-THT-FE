import { Commodity } from "@/types/alltypes";
import { useInfiniteQuery } from "@tanstack/react-query";

export async function fetchCommodities({
  pageParam,
}: {
  pageParam: number;
}): Promise<{
  data: Commodity[];
  currentPage: number;
  nextPage: number | null;
}> {
  try {
    const response = await fetch(
      `${process.env.BASE_API_URL}/list?limit=10&offset=${pageParam * 10}`,
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data from Stein API");
    }

    const data: Commodity[] = await response.json();

    return {
      data,
      currentPage: pageParam,
      nextPage: data.length > 0 ? pageParam + 1 : null,
    };
  } catch (error) {
    console.error("Error fetching data from Stein API:", error);
    throw error;
  }
}

export const useCommodityList = () => {
  const commodityList = useInfiniteQuery({
    queryKey: ["commodities"],
    queryFn: fetchCommodities,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });

  return commodityList;
};
