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
import { IAddCommodityPayload, ICommodityForm } from "@/interfaces/components";
import { fetchArea, fetchSize } from "@/libs/service";
import { useForm, Controller } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormData } from "@/types/alltypes";
import { useModal } from "@/store/useModal";
import EditConfirmation from "../Actions/EditConfirmation";
import style from "./CommodityForm.module.scss";

const CommodityForm = ({ commodityData, crud }: ICommodityForm) => {
  const { showModal } = useModal();
  const [selectedProvince, setProvince] = useState<string>();

  const schema: ZodType<FormData> = z.object({
    komoditas: z.string().min(2).max(100),
    harga: z.number().min(1),
    tanggal: z.date(),
    ukuran: z.number().min(1),
    provinsi: z.string().min(1),
    kota: z.string().min(1, { message: "Pilih kota setelah provinsi" }),
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
      uuid: crud === "edit" && commodityData ? commodityData?.uuid : uuidv4(),
      komoditas: data.komoditas,
      area_provinsi: data.provinsi,
      area_kota: data.kota,
      size: String(data.ukuran),
      price: String(data.harga),
      tgl_parsed: data.tanggal.toISOString().substring(0, 19) + "Z",
      timestamp: String(data.tanggal.getTime()),
    };

    console.log(payload);
    if (crud === "edit") {
      showModal(<EditConfirmation payload={payload} />);
    } else {
      showModal(<AddConfirmation payload={payload} />);
    }
  };

  useEffect(() => {
    if (commodityData && crud === "edit") {
      setValue("komoditas", commodityData.komoditas);
      setValue("harga", parseInt(commodityData.price));
      setValue("kota", commodityData.area_kota);
      setValue("provinsi", commodityData.area_provinsi);
      setValue("tanggal", new Date(commodityData.tgl_parsed));
      setValue("ukuran", parseInt(commodityData.size));
      setProvince(commodityData.area_provinsi);
    }
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.commodity_form}>
      <div className={style.form_container}>
        <Controller
          control={control}
          name="komoditas"
          render={({ field }) => (
            <div>
              <InputUi
                type="text"
                {...register("komoditas")}
                value={field.value}
                onChange={(e) => setValue("komoditas", e.target.value)}
              />
              {errors.komoditas && (
                <ErrorMessage message={errors.komoditas.message} />
              )}
            </div>
          )}
        />

        <Controller
          control={control}
          name="harga"
          render={({ field }) => (
            <div>
              <InputUi
                type="number"
                {...register("harga")}
                value={field.value}
                onChange={(e) => setValue("harga", parseInt(e.target.value))}
              />
              {errors.harga && <ErrorMessage message={errors.harga.message} />}
            </div>
          )}
        />

        <Controller
          control={control}
          name="ukuran"
          render={({ field }) => (
            <div>
              <SelectUi
                {...register("ukuran")}
                options={optionSize}
                onChange={(e) =>
                  e && setValue("ukuran", parseInt(e.value as string))
                }
                value={{
                  value: crud === "edit" ? String(field.value) : field.value,
                  label: crud === "edit" ? String(field.value) : field.value,
                }}
                isLoading={sizeLoading}
                placeholder={sizeLoading ? "Loading" : "Pilih ukuran"}
              />
              {errors.ukuran && (
                <ErrorMessage message={errors.ukuran.message} />
              )}
            </div>
          )}
        />

        <div className={style.area_box}>
          <Controller
            control={control}
            name="provinsi"
            render={({ field }) => (
              <div>
                <SelectUi
                  {...register("provinsi")}
                  options={optionArea?.province}
                  onChange={(e) => {
                    e && setValue("provinsi", e.value as string);
                    e && setProvince(e.value as string);
                    e && setValue("kota", "");
                  }}
                  value={{ value: field.value, label: field.value }}
                  isLoading={sizeArea}
                  placeholder={sizeArea ? "Loading" : "Pilih provinsi"}
                />
                {errors.provinsi && (
                  <ErrorMessage message={errors.provinsi.message} />
                )}
              </div>
            )}
          />

          <Controller
            control={control}
            name="kota"
            render={({ field }) => (
              <div>
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
                  }}
                  value={{
                    value: field.value ? field.value : null,
                    label: field.value ? field.value : null,
                  }}
                  placeholder={sizeArea ? "Loading" : "Pilih Kota"}
                />
                {errors.kota && <ErrorMessage message={errors.kota.message} />}
              </div>
            )}
          />
        </div>

        <div className={style.date_box}>
          <Controller
            control={control}
            name="tanggal"
            render={({ field }) => (
              <div>
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
                {errors.tanggal && (
                  <ErrorMessage message={errors.tanggal.message} />
                )}
              </div>
            )}
          />
        </div>

        <div className={style.submit_button_box}>
          <Button type="submit">
            {crud === "edit" ? "Edit Commodity" : "Add Commodity"}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default CommodityForm;
