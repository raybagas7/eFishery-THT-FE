import { fetchCommodities } from "@/libs/service";
import { useInfiniteQuery } from "@tanstack/react-query";

export const useCommodityList = (search: string) => {
  const commodityList = useInfiniteQuery({
    queryKey: ["commodities", search],
    queryFn: ({ pageParam }) => fetchCommodities({ pageParam, search }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });

  return commodityList;
};
