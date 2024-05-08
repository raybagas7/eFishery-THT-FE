import "react-datepicker/dist/react-datepicker.css";
import { ICalendar, ICustomInput } from "@/interfaces/components";
import React, { forwardRef, useState } from "react";
import DatePicker from "react-datepicker";
import style from "./calendar.module.scss";
import { FaCalendarAlt } from "react-icons/fa";

const Calendar = ({
  buttonContent = "Select date",
  name,
  ...rest
}: ICalendar) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const CustomInput = forwardRef<HTMLButtonElement>(
    ({ value, onClick }: ICustomInput, ref) => (
      <div className={style.custom_calendar_container}>
        <label htmlFor={name}>{name}</label>
        <button
          id={name}
          type="button"
          className={style.custom_input_calendar}
          onClick={onClick}
          ref={ref}
          {...rest}
        >
          {value ? value : buttonContent}
          <FaCalendarAlt />
        </button>
      </div>
    ),
  );

  return (
    <div>
      <DatePicker
        showMonthDropdown
        showYearDropdown
        scrollableYearDropdown
        selected={startDate}
        onChange={(date: Date) => setStartDate(date)}
        customInput={<CustomInput />}
        withPortal
        yearDropdownItemNumber={50}
      />
    </div>
  );
};

export default Calendar;
