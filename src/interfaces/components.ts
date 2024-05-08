import { Commodity } from "@/types/alltypes";

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
