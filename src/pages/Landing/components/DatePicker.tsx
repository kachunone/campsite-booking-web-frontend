import React from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "./DatePicker.css";

interface DayPickerProps {
  startDate: Date | null;
  endDate: Date | null;
  onChangeHander: (dates: [Date, Date]) => void;
  excludeDateIntervals: { start: Date; end: Date }[];
}

const DayPicker: React.FC<DayPickerProps> = (props) => {
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
      placeholderText={"Check-in and Check-out dates"}
      excludeDateIntervals={props.excludeDateIntervals}
      // inline
    />
  );
};

export default DayPicker;
