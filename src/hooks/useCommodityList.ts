import { fetchCommodities } from "@/libs/service";
import { useInfiniteQuery } from "@tanstack/react-query";

export const useCommodityList = (key: string, search: string) => {
  const commodityList = useInfiniteQuery({
    queryKey: ["commodities", key, search],
    queryFn: ({ pageParam }) => fetchCommodities({ pageParam, search, key }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });

  return commodityList;
};
