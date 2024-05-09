import React, { forwardRef } from "react";
import style from "./calendar-button.module.scss";
import { FaCalendarAlt } from "react-icons/fa";

interface CustomInputProps {
  value?: string | undefined;
  onClick?: () => void;
  name?: string;
}

const CalendarButton = forwardRef<HTMLButtonElement, CustomInputProps>(
  ({ value, onClick, name }, ref) => (
    <div className={style.custom_calendar_container}>
      <label htmlFor={name}>{name}</label>
      <button
        id={name}
        type="button"
        className={style.custom_input_calendar}
        onClick={onClick}
        ref={ref}
      >
        {value || "Pilih tanggal"}
        <FaCalendarAlt />
      </button>
    </div>
  ),
);

export default CalendarButton;
