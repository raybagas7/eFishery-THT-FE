import { Commodity } from "@/types/alltypes";
import React, { ButtonHTMLAttributes, InputHTMLAttributes } from "react";

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "small" | "base" | "large";
  variant?: "primary" | "secondary" | "destructive" | "outline";
}

export interface IUserSellerLayout {
  children: React.ReactNode;
}

export interface IMobileNavigation {
  toggleAside: () => void;
}

export interface IDetailCommodity {
  commodityData: Commodity;
}

export interface ICommodityCard extends IDetailCommodity {
  index?: number;
  page?: number;
}

export interface IPopUpActionContent {
  uuid: string;
}

export interface ICustomInput {
  value?: string;
  onClick?: () => void;
}

export interface ICalendar extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonContent?: React.ReactNode;
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
}

export interface IOption {
  value: string;
  label: string;
}

export interface IErrorMessage {
  message: React.ReactNode;
}

export interface IAddCommodityPayload {
  uuid: string;
  komoditas: string;
  area_provinsi: string;
  area_kota: string;
  size: string;
  price: string;
  tgl_parsed: string;
  timestamp: string;
}

export interface IModalProps {
  backDropClose?: boolean;
  component?: React.ReactNode;
}

export interface IAddConfirmation {
  payload: IAddCommodityPayload;
}

export interface ICommodityForm {
  commodityData?: Commodity;
  crud: "add" | "edit";
}
