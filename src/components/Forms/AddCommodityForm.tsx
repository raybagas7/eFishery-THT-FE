import React from "react";
import InputUi from "../ui/input-ui";
import Calendar from "../ui/calendar";

const AddCommodityForm = () => {
  {
    /* <Calendar />
      <SelectUi options={options} />
      <InputUi name="Input" /> */
  }
  return (
    <form>
      <InputUi type="text" name="Nama Komoditas" />
      <InputUi type="number" name="Harga" />
      <Calendar name="Calendar" />
    </form>
  );
};

export default AddCommodityForm;
