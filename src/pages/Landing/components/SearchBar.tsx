import React, { ReactElement, useState } from "react";
import "./SearchBar.css";
import DropDown from "./Dropdown";
import DayPicker from "./DatePicker";
import { useNavigate } from "react-router-dom";
import { GeoAltFill, XDiamondFill } from "react-bootstrap-icons";
import { Col, Row } from "react-bootstrap";

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
    <Row className="search-bar">
      <Col
        xs={12}
        sm={12}
        md={6}
        lg={6}
        xl={6}
        xxl={3}
        className="equipments-container"
      >
        <DropDown
          options={dropDownEquipment.options}
          cb={handleSelectEquipment}
          selectedItem={selectedEquipment}
          icon={equipmentIcon}
        />
      </Col>
      <Col
        xs={12}
        sm={12}
        md={6}
        lg={6}
        xl={6}
        xxl={3}
        className="regions-container"
      >
        <DropDown
          options={dropDownRegion.options}
          cb={handleSelectRegion}
          selectedItem={selectedRegion}
          icon={regionIcon}
        />
      </Col>
      <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={4} className="check-in">
        <DayPicker
          startDate={startDate}
          endDate={endDate}
          onChangeHander={onChangeDates}
        />
      </Col>
      <Col
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        xxl={2}
        className="btn-container"
      >
        <button className="search-btn" onClick={btnPressed}>
          SEARCH
        </button>
      </Col>
    </Row>
  );
};

export default SearchBar;
