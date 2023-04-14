import React from "react";
import { useLocation } from "react-router-dom";
import "./choosing.css";
import SearchBar from "../Landing/components/SearchBar";
import Card from "./components/Card";
import { Col, Row, Container } from "react-bootstrap";

const DUMMY_CAMPSITE = {};

const Choosing: React.FC = () => {
  const location = useLocation();

  return (
    <Container
      style={{ backgroundColor: "green", height: "100vh", textAlign: "center" }}
    >
      <Row style={{ backgroundColor: "blue" }}>
        <Col className="bg-dark ">1 of 3</Col>
        <Col>1 of 3</Col>
        <Col>1 of 3</Col>
        <Col>1 of 3</Col>
      </Row>
      <Row style={{ backgroundColor: "white", borderRadius: 10 }}>
        <Col style={{ backgroundColor: "blue", borderRadius: 10, margin: 10 }}>
          3 of 3
        </Col>
        <Col style={{ backgroundColor: "blue", borderRadius: 10, margin: 10 }}>
          3 of 3
        </Col>
        <Col style={{ backgroundColor: "blue", borderRadius: 10, margin: 10 }}>
          3 of 3
        </Col>
        <Col style={{ backgroundColor: "blue", borderRadius: 10, margin: 10 }}>
          3 of 3
        </Col>
      </Row>
    </Container>
  );
};

export default Choosing;
