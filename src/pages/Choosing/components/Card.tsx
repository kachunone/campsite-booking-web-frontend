import React from "react";
import cc from "../../../assets/images/landing-img/campfire.png";
import "./Card.css";
import { Col } from "react-bootstrap";

const Card: React.FC = () => {
  return (
    <div className="site-container">
      <img src={cc} alt="" />
      <div className="site-info">
        <div>
          <h1>Site 123</h1>
          <p>Equipment: Single Tent, 3 Tents, Trailer up to 18ft</p>
        </div>
        <div>
          <p className="site-feature-text">SITE FEATURES</p>
          <p>icon icon icon</p>
        </div>
        <h6>From 240/night</h6>
      </div>
    </div>
  );
};

export default Card;
