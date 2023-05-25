import React, { ReactElement, useState } from "react";
import "./SearchBar.css";
import DropDown from "./Dropdown";
import DayPicker from "./DatePicker";
import { useNavigate } from "react-router-dom";
import { GeoAltFill, XDiamondFill } from "react-bootstrap-icons";
import { Col, Row } from "react-bootstrap";

interface SearchBarProps {
  page: string;
  selectedEquipment: string;
  selectedRegion: string;
  selectedStart: Date | null;
  selectedEnd: Date | null;
  onSearch:
    | ((
        equipment: string,
        region: string,
        start: Date | null,
        end: Date | null
      ) => Promise<void>)
    | null;
}

const dropDownEquipment = {
  defaultSelected: "Equipments",
  options: [
    "Equipments",
    "Single tent",
    "3 tents",
    "Trailer up to 18ft",
    "Fire pit",
    "Camping gear",
    "Hammock",
    "Portable grill",
    "Camping chairs",
    "Beach chairs",
  ],
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

const SearchBar: React.FC<SearchBarProps> = (props) => {
  const [selectedEquipment, setSelectedEquipment] = useState<string>(
    props.selectedEquipment
  );
  const [selectedRegion, setSelectedRegion] = useState<string>(
    props.selectedRegion
  );

  const [startDate, setStartDate] = useState<Date | null>(props.selectedStart);
  const [endDate, setEndDate] = useState<Date | null>(props.selectedEnd);
  const [pageOn, setPageOn] = useState<string>(props.page);

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
    if (pageOn === "landing") {
      navigate("/choosing", {
        state: {
          type: selectedEquipment,
          region: selectedRegion,
          start: startDate,
          end: endDate,
        },
      });
    } else if (pageOn === "choosing") {
      if (props.onSearch) {
        props.onSearch(selectedEquipment, selectedRegion, startDate, endDate);
      }
    }
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
          excludeDateIntervals={[]}
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
