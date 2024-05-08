import "react-day-picker/src/style.css";
import React from "react";
import { useState } from "react";
import { DayPicker } from "react-day-picker";

const Calendar = () => {
  const [selected, setSelected] = useState<Date>();
  return <DayPicker mode="single" selected={selected} onSelect={setSelected} />;
};

export default Calendar;
