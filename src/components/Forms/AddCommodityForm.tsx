import React, { useState } from "react";
import InputUi from "../ui/input-ui";
import Calendar from "../ui/calendar";
import SelectUi from "../ui/select-ui";
import { useQuery } from "@tanstack/react-query";

const fetchSize = async () => {
  const response = await fetch(`${process.env.BASE_API_URL}/option_size`);
  const sizes: { size: string }[] = await response.json();
  return sizes.map((size) => ({
    value: size.size,
    label: size.size,
  }));
};

const AddCommodityForm = () => {
  const [selectedSize, setSize] = useState<string>();

  const { data: optionSize, isLoading: sizeLoading } = useQuery({
    queryKey: ["option-sizes"],
    queryFn: fetchSize,
  });

  console.log(optionSize);
  console.log(selectedSize);

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
    </form>
  );
};

export default AddCommodityForm;
