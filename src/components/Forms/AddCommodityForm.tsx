import React, { useState } from "react";
import InputUi from "../ui/input-ui";
import Calendar from "../ui/calendar";
import SelectUi from "../ui/select-ui";
import { useQuery } from "@tanstack/react-query";

type ProvinceObject = {
  [province: string]: {
    value: string | null;
    label: string | null;
    cities: {
      value: string | null;
      label: string | null;
    }[];
  };
};

const fetchSize = async () => {
  const response = await fetch(`${process.env.BASE_API_URL}/option_size`);
  const sizes: { size: string }[] = await response.json();
  return sizes.map((size) => ({
    value: size.size,
    label: size.size,
  }));
};
const fetchArea = async () => {
  const response = await fetch(`${process.env.BASE_API_URL}/option_area`);
  const areas: { province: string | null; city: string | null }[] =
    await response.json();

  console.log(areas);

  let areaData: ProvinceObject = {};

  areas.forEach((area) => {
    const { province, city } = area;
    if (province !== null && city !== null) {
      // Check if neither province nor city is null
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

const AddCommodityForm = () => {
  const [selectedSize, setSize] = useState<string>();
  const [selectedProvince, setProvince] = useState<string>();
  const [selectedCity, setCity] = useState<string>();

  const { data: optionSize, isLoading: sizeLoading } = useQuery({
    queryKey: ["option-sizes"],
    queryFn: fetchSize,
  });

  const { data: optionArea, isLoading: sizeArea } = useQuery({
    queryKey: ["option-province"],
    queryFn: fetchArea,
  });

  console.log(selectedSize);
  console.log(selectedCity);

  return (
    <form>
      <InputUi type="text" name="Nama Komoditas" />
      <InputUi type="number" name="Harga" />
      <Calendar name="Calendar" />
      <SelectUi
        name="Ukuran"
        options={optionSize}
        onChange={(e) => e && setSize(e.value)}
        placeholder={sizeLoading ? "Loading" : "Pilih ukuran"}
      />
      <SelectUi
        name="Provinsi"
        options={optionArea?.province}
        onChange={(e) => {
          e && setProvince(e.value);
        }}
        placeholder={sizeArea ? "Loading" : "Pilih provinsi"}
      />

      <SelectUi
        name="Kota"
        options={
          selectedProvince
            ? optionArea?.areaData[`${selectedProvince}`].cities
            : undefined
        }
        onChange={(e) => e && setCity(e.value as string)}
        placeholder={sizeArea ? "Loading" : "Pilih Kota"}
      />
    </form>
  );
};

export default AddCommodityForm;
