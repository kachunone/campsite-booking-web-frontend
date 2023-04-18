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
    image:
      "https://hips.hearstapps.com/hmg-prod/images/sunrise-quotes-21-1586892331.jpg?crop=1.00xw:0.895xh;0,0&resize=1200:*",
  },
  {
    id: 689,
    title: "Newburgh",
    description: "Some quick example text to build on the card",
    equipments: ["Single Tent", "3 Tents", "Trailer up to 18ft"],
    region: "New York",
    price: 128,
    image:
      "https://images.unsplash.com/photo-1614687345016-9183348d8f35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=990&q=80",
  },
  {
    id: 689,
    title: "Newburgh",
    description: "Some quick example text to build on the card",
    equipments: ["Single Tent", "3 Tents", "Trailer up to 18ft"],
    region: "New York",
    price: 128,
    image:
      "https://assetsw.bus.com/content/uploads/2019/05/27144854/toronto-camping-bus-rentals.jpg",
  },
  {
    id: 689,
    title: "Newburgh",
    description: "Some quick example text to build on the card",
    equipments: ["Single Tent", "3 Tents", "Trailer up to 18ft"],
    region: "New York",
    price: 128,
    image:
      "https://assetsw.bus.com/content/uploads/2019/05/27144854/toronto-camping-bus-rentals.jpg",
  },
  {
    id: 689,
    title: "Newburgh",
    description: "Some quick example text to build on the card",
    equipments: ["Single Tent", "3 Tents", "Trailer up to 18ft"],
    region: "New York",
    price: 128,
    image:
      "https://assetsw.bus.com/content/uploads/2019/05/27144854/toronto-camping-bus-rentals.jpg",
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
