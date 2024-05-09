import "react-datepicker/dist/react-datepicker.css";
import { v4 as uuidv4 } from "uuid";
import Button from "../ui/button";
import InputUi from "../ui/input-ui";
import SelectUi from "../ui/select-ui";
import ErrorMessage from "../ui/error-msg";
import CalendarButton from "../ui/calendar-button";
import AddConfirmation from "../Actions/AddConfirmation";
import DatePicker from "react-datepicker";
import React, { useEffect, useState } from "react";
import { z, ZodType } from "zod";
import { IAddCommodityPayload } from "@/interfaces/components";
import { fetchArea, fetchSize } from "@/libs/service";
import { useForm, Controller } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormData } from "@/types/alltypes";
import { useModal } from "@/store/useModal";

const AddCommodityForm = () => {
  const { showModal } = useModal();
  const [selectedProvince, setProvince] = useState<string>();
  const [selectedCity, setCity] = useState<string | null>(null);

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

  const onSubmit = (data: FormData) => {
    const payload: IAddCommodityPayload = {
      uuid: uuidv4(),
      komoditas: data.komoditas,
      area_provinsi: data.provinsi,
      area_kota: data.kota,
      size: String(data.ukuran),
      price: String(data.harga),
      tgl_parsed: data.tanggal.toISOString().substring(0, 19) + "Z",
      timestamp: String(data.tanggal.getTime()),
    };

    console.log(payload);
    showModal(<AddConfirmation payload={payload} />);
  };

  useEffect(() => {
    setCity(null);
  }, [selectedProvince]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputUi
        type="text"
        {...register("komoditas")}
        onChange={(e) => setValue("komoditas", e.target.value)}
      />
      {errors.komoditas && <ErrorMessage message={errors.komoditas.message} />}
      <InputUi
        type="number"
        {...register("harga")}
        onChange={(e) => setValue("harga", parseInt(e.target.value))}
      />
      {errors.harga && <ErrorMessage message={errors.harga.message} />}

      <Controller
        control={control}
        name="tanggal"
        render={({ field }) => (
          <DatePicker
            name={field.name}
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
      {errors.tanggal && <ErrorMessage message={errors.tanggal.message} />}

      <SelectUi
        {...register("ukuran")}
        options={optionSize}
        onChange={(e) => e && setValue("ukuran", parseInt(e.value as string))}
        isLoading={sizeLoading}
        placeholder={sizeLoading ? "Loading" : "Pilih ukuran"}
      />
      {errors.ukuran && <ErrorMessage message={errors.ukuran.message} />}

      <SelectUi
        {...register("provinsi")}
        options={optionArea?.province}
        onChange={(e) => {
          e && setValue("provinsi", e.value as string);
          e && setProvince(e.value as string);
          e && setValue("kota", "");
        }}
        isLoading={sizeArea}
        placeholder={sizeArea ? "Loading" : "Pilih provinsi"}
      />
      {errors.provinsi && <ErrorMessage message={errors.provinsi.message} />}

      <SelectUi
        {...register("kota")}
        options={
          selectedProvince
            ? optionArea?.areaData[`${selectedProvince}`].cities
            : undefined
        }
        isLoading={sizeArea}
        onChange={(e) => {
          e && setValue("kota", e.value as string);
          e && setCity(e.value as string);
        }}
        value={{ value: selectedCity, label: selectedCity }}
        placeholder={sizeArea ? "Loading" : "Pilih Kota"}
      />
      {errors.kota && <ErrorMessage message={errors.kota.message} />}

      <div>
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
};

export default AddCommodityForm;
