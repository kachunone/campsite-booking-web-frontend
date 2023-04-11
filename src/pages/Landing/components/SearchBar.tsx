import React from "react";
import "./SearchBar.css";
import DropDown from "../../../shared/components/Dropdown";
import DayPicker from "../../../shared/components/DatePicker";

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
      <button className="search-btn">Search</button>
    </div>
  );
};

export default SearchBar;
