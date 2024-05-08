import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from "react";
import InputUi from "../ui/input-ui";
import SelectUi from "../ui/select-ui";
import { useQuery } from "@tanstack/react-query";
import { fetchArea, fetchSize } from "@/libs/service";
import { z, ZodType } from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../ui/button";
import DatePicker from "react-datepicker";
import CalendarButton from "../ui/calendar-button";

type FormData = {
  komoditas: string;
  harga: number;
  tanggal: Date;
  ukuran: number;
  provinsi: string;
  kota: string;
};

const AddCommodityForm = () => {
  const [selectedProvince, setProvince] = useState<string>();

  const schema: ZodType<FormData> = z.object({
    komoditas: z.string().min(2).max(100),
    harga: z.number().min(1),
    tanggal: z.date(),
    ukuran: z.number().min(1),
    provinsi: z.string().min(1),
    kota: z.string().min(1),
  });

  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const { data: optionSize, isLoading: sizeLoading } = useQuery({
    queryKey: ["option-sizes"],
    queryFn: fetchSize,
  });

  const { data: optionArea, isLoading: sizeArea } = useQuery({
    queryKey: ["option-province"],
    queryFn: fetchArea,
  });

  console.log(errors);

  const onSubmit = (data: FormData) => {
    console.log("IT WORKED", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputUi
        type="text"
        {...register("komoditas")}
        onChange={(e) => setValue("komoditas", e.target.value)}
      />
      <InputUi
        type="number"
        {...register("harga")}
        onChange={(e) => setValue("harga", parseInt(e.target.value))}
      />
      <Controller
        control={control}
        name="tanggal"
        render={({ field }) => (
          <DatePicker
            showMonthDropdown
            showYearDropdown
            scrollableYearDropdown
            selected={field.value}
            onChange={(date) => field.onChange(date)}
            customInput={<CalendarButton />}
            withPortal
            yearDropdownItemNumber={50}
          />
        )}
      />
      <SelectUi
        {...register("ukuran")}
        options={optionSize}
        onChange={(e) => e && setValue("ukuran", parseInt(e.value as string))}
        placeholder={sizeLoading ? "Loading" : "Pilih ukuran"}
      />
      <SelectUi
        {...register("provinsi")}
        options={optionArea?.province}
        onChange={(e) => {
          e && setValue("provinsi", e.value as string);
          e && setProvince(e.value as string);
        }}
        placeholder={sizeArea ? "Loading" : "Pilih provinsi"}
      />
      <SelectUi
        {...register("kota")}
        options={
          selectedProvince
            ? optionArea?.areaData[`${selectedProvince}`].cities
            : undefined
        }
        onChange={(e) => e && setValue("kota", e.value as string)}
        placeholder={sizeArea ? "Loading" : "Pilih Kota"}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default AddCommodityForm;
