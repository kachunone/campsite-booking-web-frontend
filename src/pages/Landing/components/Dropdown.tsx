import React, { ReactElement } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "./Dropdown.css";

interface DropDownProps {
  options: string[];
  cb: (eventKey: string | null) => void;
  selectedItem: string;
  icon: ReactElement;
}

const DropDown: React.FC<DropDownProps> = (props) => {
  return (
    <Dropdown onSelect={props.cb}>
      <Dropdown.Toggle id="dropdown-basic" bsPrefix="none">
        {props.icon}
        {props.selectedItem}
      </Dropdown.Toggle>
      <Dropdown.Menu>
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
