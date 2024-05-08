export type Commodity = {
  uuid: string;
  komoditas: string;
  area_provinsi: string;
  area_kota: string;
  size: string;
  price: string;
  tgl_parsed: string;
  timestamp: string;
};

export type ProvinceObject = {
  [province: string]: {
    value: string | null;
    label: string | null;
    cities: {
      value: string | null;
      label: string | null;
    }[];
  };
};
