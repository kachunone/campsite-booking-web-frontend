import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "./Dropdown.css";

interface DropDownProps {
  defaultSelected?: string;
  options: string[];
}

const DropDown: React.FC<DropDownProps> = (props) => {
  const [selectedItem, setSelectedItem] = useState<string>(
    props.defaultSelected || ""
  );

  const handleSelect = (eventKey: string | null) => {
    setSelectedItem(eventKey!);
  };

  return (
    <Dropdown id="dropdown" onSelect={handleSelect}>
      <Dropdown.Toggle id="dropdown-basic" bsPrefix="none">
        {selectedItem ? selectedItem : "Select an option"}
      </Dropdown.Toggle>
      <Dropdown.Menu id="menu">
        {props.options.map((option) => (
          <Dropdown.Item key={option} eventKey={option}>
            {option}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropDown;
