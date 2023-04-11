import React from "react";
import "./SearchBar.css";
import DropDown from "./Dropdown";
import DayPicker from "./DatePicker";

const dropDownEquipment = {
  defaultSelected: "Equipment",
  options: ["Singe tent", "3 tents", "Trailer up to 18ft"],
};

const dropDownRegion = {
  defaultSelected: "Region",
  options: [
    "Downtown Toronto",
    "Midtown Toronto",
    "North York",
    "Scarborough",
    "Etobicoke",
    "East York",
    "York",
  ],
};

const SearchBar: React.FC = () => {
  return (
    <div className="search-bar">
      <div className="equipments-container">
        <DropDown
          defaultSelected={dropDownEquipment.defaultSelected}
          options={dropDownEquipment.options}
        />
      </div>
      <div className="regions-container">
        <DropDown
          defaultSelected={dropDownRegion.defaultSelected}
          options={dropDownRegion.options}
        />
      </div>
      <div className="check-in">
        <DayPicker />
      </div>
    </div>
  );
};

export default SearchBar;
