import React from "react";
import { useLocation } from "react-router-dom";
import "./choosing.css";
import SearchBar from "../Landing/components/SearchBar";
import CampsiteList from "./components/CampsiteList";
import { Col, Row, Container } from "react-bootstrap";
import "./choosing.css";

const campsiteList = [
  {
    id: 689,
    title: "Newburgh",
    description: "Some quick example text to build on the card",
    equipments: ["Single Tent", "3 Tents", "Trailer up to 18ft"],
    region: "New York",
    price: 128,
  },
  {
    id: 689,
    title: "Newburgh",
    description: "Some quick example text to build on the card",
    equipments: ["Single Tent", "3 Tents", "Trailer up to 18ft"],
    region: "New York",
    price: 128,
  },
  {
    id: 689,
    title: "Newburgh",
    description: "Some quick example text to build on the card",
    equipments: ["Single Tent", "3 Tents"],
    region: "New York",
    price: 689,
  },
  {
    id: 689,
    title: "Newburgh",
    description: "Some quick example text to build on the card",
    equipments: ["Single Tent", "3 Tents"],
    region: "New York",
    price: 689,
  },
  {
    id: 689,
    title: "Newburgh",
    description: "Some quick example text to build on the card",
    equipments: ["Single Tent", "3 Tents"],
    region: "New York",
    price: 689,
  },
  {
    id: 689,
    title: "Newburgh",
    description: "Some quick example text to build on the card",
    equipments: ["Single Tent", "3 Tents"],
    region: "New York",
    price: 689,
  },
];

const Choosing: React.FC = () => {
  const location = useLocation();

  return (
    <Container fluid>
      <Row>
        <Col className="choosing-page">
          <div className="search-bar-container">
            <SearchBar />
          </div>
          <div className="campsite-list-container">
            <CampsiteList campsiteList={campsiteList} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Choosing;
