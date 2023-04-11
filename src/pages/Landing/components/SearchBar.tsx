import React from "react";
import "./SearchBar.css";
import DropDown from "./Dropdown";
import DayPicker from "./DatePicker";

const SearchBar: React.FC = () => {
  return (
    <div className="search-bar">
      <div className="equipments-container">
        <DropDown />
      </div>
      <div className="regions-container">
        <DropDown />
      </div>
      <div className="check-in">
        <DayPicker />
      </div>
    </div>
  );
};

export default SearchBar;
