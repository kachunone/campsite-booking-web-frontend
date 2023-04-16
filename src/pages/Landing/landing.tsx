import React, { ChangeEvent, Fragment, useState } from "react";
import "./landing.css";
import { Link } from "react-router-dom";
import camp1 from "../../assets/images/landing-img/camping-01.png";
import camp2 from "../../assets/images/landing-img/camping-fire.png";
import camp3 from "../../assets/images/landing-img/camping-lake.png";
import camp4 from "../../assets/images/landing-img/camping-sunrise.jpg";

import campFireIcon from "../../assets/images/landing-img/campfire.png";
import mapIcon from "../../assets/images/landing-img/map.png";
import backpackIcon from "../../assets/images/landing-img/backpack.png";

import SearchBar from "./components/SearchBar";

import "react-datepicker/dist/react-datepicker.css";
import { Col, Row, Container } from "react-bootstrap";

const Landing: React.FC = () => {
  return (
    <Container fluid className="landing-container">
      <Row className="main">
        <Col className="gx-0">
          <div className="main-container">
            <h1>Let's Go Camping!</h1>
            <SearchBar />
          </div>
        </Col>
      </Row>

      <Row>
        <Col className="promo-bar-container">
          <Row className="promo-bar">
            <Col xs={12} md={12} lg={4} className="bar-item-container">
              <img src={campFireIcon} alt="" />
              <div className="text-container">
                <h4>3500+</h4>
                <p>Campgrounds</p>
              </div>
            </Col>
            <Col xs={12} md={12} lg={4} className="bar-item-container">
              <img src={mapIcon} alt="" />
              <div className="text-container">
                <h4>57</h4>
                <p>Countries/States</p>
              </div>
            </Col>
            <Col xs={12} md={12} lg={4} className="bar-item-container">
              <img src={backpackIcon} alt="" />
              <div className="text-container">
                <h4>Countless</h4>
                <p>Happy campers</p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className="intro-container">
        <Col className="left-side">
          <div className="left-content">
            <h2>Discover Your Next Camping Adventure</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua."
              translates to "Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.
            </p>
            <button>START</button>
          </div>
        </Col>
        <Col className="right-side">
          <div className="img-container">
            <div className="main-img">
              <img src={camp1} alt="" />
            </div>
            <div className="sidebar">
              <img src={camp2} alt="" />
            </div>
            <div className="twin">
              <img src={camp3} alt=""></img>
            </div>
            <div className="twin">
              <img src={camp4} alt="" />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Landing;
