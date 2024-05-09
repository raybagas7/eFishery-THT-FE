import {
  IAddCommodityPayload,
  IEditCommodityPayload,
} from "@/interfaces/components";
import { Commodity, ProvinceObject } from "@/types/alltypes";

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

export const fetchSize = async () => {
  const response = await fetch(`${process.env.BASE_API_URL}/option_size`);
  const sizes: { size: string }[] = await response.json();
  return sizes.map((size) => ({
    value: size.size,
    label: size.size,
  }));
};

export const fetchArea = async () => {
  const response = await fetch(`${process.env.BASE_API_URL}/option_area`);
  const areas: { province: string | null; city: string | null }[] =
    await response.json();

  let areaData: ProvinceObject = {};

  areas.forEach((area) => {
    const { province, city } = area;
    if (province !== null && city !== null) {
      if (!areaData[province]) {
        areaData[province] = {
          value: province,
          label: province,
          cities: [{ value: city, label: city }],
        };
      } else {
        const cityExists = areaData[province].cities.some(
          (c: { value: string | null; label: string | null }) =>
            c.value === city,
        );
        if (!cityExists && city !== "ASD") {
          areaData[province].cities.push({
            value: city,
            label: city,
          });
        }
      }
    }
  });

  return {
    areaData,
    province: Object.values(areaData).map(({ value, label }) => {
      if (value === null || label === null) {
        return {
          value: "UNKNOWN",
          label: "UNKNOWN",
        };
      } else {
        return {
          value,
          label,
        };
      }
    }),
  };
};

export const fetchAddList = async (data: IAddCommodityPayload[]) => {
  const response = await fetch(`${process.env.BASE_API_URL}/list`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const res = await response.json();

  return res;
};

export const fetchEditList = async (data: IEditCommodityPayload[]) => {
  const { uuid, ...setWithoutUuid } = data[0];

  const editPayload = {
    condition: { uuid },
    set: setWithoutUuid,
  };

  const response = await fetch(`${process.env.BASE_API_URL}/list`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(editPayload),
  });
  const res = await response.json();

  return res;
};
