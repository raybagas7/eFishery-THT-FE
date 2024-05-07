"use clients";
import { useCommodityList } from "@/hooks/useCommodityList";
import React from "react";

const CommodityList = () => {
  const { isPending, isError, data } = useCommodityList();

  if (isPending && !data) {
    return (
      <div>
        <p>PENDING</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <h2>Error Happen to Our Server</h2>
        <p>Please comeback later</p>
      </div>
    );
  }

  console.log(data);

  return (
    <div>
      CommodityList
      {data.pages.map((page) => {
        return (
          <ul key={page.currentPage}>
            {page?.data?.map((comodity, index) => (
              <p key={`${comodity}-${index}`}>{comodity.komoditas}</p>
            ))}
          </ul>
        );
      })}
    </div>
  );
};

export default CommodityList;
