import React from "react";
import { useLocation } from "react-router-dom";
import "./choosing.css";
import SearchBar from "../Landing/components/SearchBar";
import CampsiteList from "./components/CampsiteList";
import { Col, Row, Container } from "react-bootstrap";
import "./choosing.css";

const DUMMY_CAMPSITE = {};

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
            <CampsiteList />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Choosing;
