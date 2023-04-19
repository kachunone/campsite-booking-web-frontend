import React, { ReactElement, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "./DatePicker.css";

interface DayPicker {
  startDate: Date | null;
  endDate: Date | null;
  onChangeHander: (dates: [Date, Date]) => void;
}

const DayPicker: React.FC<DayPicker> = (props) => {
  return (
    <DatePicker
      id="date-picker"
      selected={props.startDate}
      onChange={props.onChangeHander}
      startDate={props.startDate}
      endDate={props.endDate}
      selectsRange={true}
      minDate={new Date()}
      dateFormat="MMM dd, yyyy"
      placeholderText={"Select Start & End dates"}
      // inline
    />
  );
};

export default DayPicker;
