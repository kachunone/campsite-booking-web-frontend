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
    description:
      "aaSome  aaSome quick example text to build on the card Some quick example text toSome quick example text to build on the cardSome quick example text to build on the cardSome quick example text to build on the card build on the card Some quick example text to build on the cardSome quick example text to build on the card Some quick example text to build on the card Some quick example text to build on the cardquick example text to build on the card Some quick example text toSome quick example text to build on the cardSome quick example text to build on the cardSome quick example text to build on the card build on the card Some quick example text to build on the cardSome quick example text to build on the card Some quick example text to build on the card Some quick example text to build on the card",
    equipments: ["Single Tent", "3 Tents", "Trailer up to 18ft"],
    region: "New York",
    price: 128,
    image:
      "https://hips.hearstapps.com/hmg-prod/images/sunrise-quotes-21-1586892331.jpg?crop=1.00xw:0.895xh;0,0&resize=1200:*",
  },
  {
    id: 689,
    title: "Newburgh",
    description:
      "aaSome  aaSome quick example text to build on the card Some quick example text toSome quick example text to build on the cardSome quick example text to build on the cardSome quick example text to build on the card build on the card Some quick example text to build on the cardSome quick example text to build on the card Some quick example text to build on the card Some quick example text to build on the cardquick example text to build on the card Some quick example text toSome quick example text to build on the cardSome quick example text to build on the cardSome quick example text to build on the card build on the card Some quick example text to build on the cardSome quick example text to build on the card Some quick example text to build on the card Some quick example text to build on the card",
    equipments: ["Single Tent", "3 Tents", "Trailer up to 18ft"],
    region: "New York",
    price: 128,
    image:
      "https://www.travelandleisure.com/thmb/bmnzMXrvf8089l0Rb9h7GON8Axk=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/lake-wenatchee-state-park_HERO_CAMPWA0922-09e49c99f7fd4a3b9238bdfd4475928b.jpg",
  },
  {
    id: 689,
    title: "Newburgh",
    description:
      "aaSome  aaSome quick example text to build on the card Some quick example text toSome quick example text to build on the cardSome quick example text to build on the cardSome quick example text to build on the card build on the card Some quick example text to build on the cardSome quick example text to build on the card Some quick example text to build on the card Some quick example text to build on the cardquick example text to build on the card Some quick example text toSome quick example text to build on the cardSome quick example text to build on the cardSome quick example text to build on the card build on the card Some quick example text to build on the cardSome quick example text to build on the card Some quick example text to build on the card Some quick example text to build on the card",

    equipments: ["Single Tent", "3 Tents", "Trailer up to 18ft"],
    region: "New York",
    price: 128,
    image:
      "https://assetsw.bus.com/content/uploads/2019/05/27144854/toronto-camping-bus-rentals.jpg",
  },
  {
    id: 689,
    title: "Newburgh",
    description:
      "aaSome  aaSome quick example text to build on the card Some quick example text toSome quick example text to build on the cardSome quick example text to build on the cardSome quick example text to build on the card build on the card Some quick example text to build on the cardSome quick example text to build on the card Some quick example text to build on the card Some quick example text to build on the cardquick example text to build on the card Some quick example text toSome quick example text to build on the cardSome quick example text to build on the cardSome quick example text to build on the card build on the card Some quick example text to build on the cardSome quick example text to build on the card Some quick example text to build on the card Some quick example text to build on the card",
    equipments: ["Single Tent", "3 Tents", "Trailer up to 18ft"],
    region: "New York",
    price: 128,
    image:
      "https://assetsw.bus.com/content/uploads/2019/05/27144854/toronto-camping-bus-rentals.jpg",
  },
  {
    id: 689,
    title: "Newburgh",
    description:
      "aaSome  aaSome quick example text to build on the card Some quick example text toSome quick example text to build on the cardSome quick example text to build on the cardSome quick example text to build on the card build on the card Some quick example text to build on the cardSome quick example text to build on the card Some quick example text to build on the card Some quick example text to build on the cardquick example text to build on the card Some quick example text toSome quick example text to build on the cardSome quick example text to build on the cardSome quick example text to build on the card build on the card Some quick example text to build on the cardSome quick example text to build on the card Some quick example text to build on the card Some quick example text to build on the card",
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
