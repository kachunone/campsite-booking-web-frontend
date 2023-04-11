import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "./Dropdown.css";

const DropDown: React.FC = () => {
  return (
    <Dropdown id="dropdown">
      <Dropdown.Toggle id="dropdown-basic" bsPrefix="none">
        Toronto
      </Dropdown.Toggle>
      <Dropdown.Menu id="menu">
        <Dropdown.Item>Action</Dropdown.Item>
        <Dropdown.Item>Another action</Dropdown.Item>
        <Dropdown.Item>Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropDown;
