import { fetchCommodities } from "@/libs/service";
import { useInfiniteQuery } from "@tanstack/react-query";

export const useCommodityList = () => {
  const commodityList = useInfiniteQuery({
    queryKey: ["commodities"],
    queryFn: fetchCommodities,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });

  return commodityList;
};
