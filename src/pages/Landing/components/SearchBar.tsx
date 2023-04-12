import React, { Fragment, ReactElement, useState } from "react";
import "./SearchBar.css";
import DropDown from "./Dropdown";
import DayPicker from "./DatePicker";
import { useNavigate } from "react-router-dom";
import { GeoAltFill, XDiamondFill } from "react-bootstrap-icons";

const dropDownEquipment = {
  defaultSelected: "Equipments",
  options: ["Equipments", "Singe tent", "3 tents", "Trailer up to 18ft"],
};

const dropDownRegion = {
  defaultSelected: "Regions",
  options: [
    "Regions",
    "Downtown Toronto",
    "Midtown Toronto",
    "North York",
    "Scarborough",
    "Etobicoke",
    "East York",
    "York",
  ],
};

const regionIcon: ReactElement = (
  <GeoAltFill style={{ marginBottom: 3.5, fontSize: 13, marginRight: 8 }} />
);

const equipmentIcon: ReactElement = (
  <XDiamondFill style={{ marginBottom: 3.5, fontSize: 13, marginRight: 8 }} />
);

const SearchBar: React.FC = () => {
  const [selectedEquipment, setSelectedEquipment] =
    useState<string>("Equipments");
  const [selectedRegion, setSelectedRegion] = useState<string>("Regions");

  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleSelectEquipment = (eventKey: string | null) => {
    setSelectedEquipment(eventKey!);
  };

  const handleSelectRegion = (eventKey: string | null) => {
    setSelectedRegion(eventKey!);
  };

  const onChangeDates = (dates: [Date, Date]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const navigate = useNavigate();
  const btnPressed = () => {
    navigate("/choosing", {
      state: { type: selectedEquipment, region: selectedRegion },
    });
  };

  return (
    <div style={{ display: "flex" }}>
      <div className="search-bar">
        <div className="equipments-container">
          <DropDown
            options={dropDownEquipment.options}
            cb={handleSelectEquipment}
            selectedItem={selectedEquipment}
            icon={equipmentIcon}
          />
        </div>
        <div className="regions-container">
          <DropDown
            options={dropDownRegion.options}
            cb={handleSelectRegion}
            selectedItem={selectedRegion}
            icon={regionIcon}
          />
        </div>
        <div className="check-in">
          <DayPicker
            startDate={startDate}
            endDate={endDate}
            onChangeHander={onChangeDates}
          />
        </div>
      </div>
      <button className="search-btn" onClick={btnPressed}>
        SEARCH
      </button>
    </div>
  );
};

export default SearchBar;
