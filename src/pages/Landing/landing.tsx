import React, { ChangeEvent, Fragment, useState } from "react";
import "./landing.css";
import { Link } from "react-router-dom";
import camp1 from "../../assets/images/landing-img/camping-01.png";
import camp2 from "../../assets/images/landing-img/camping-fire.png";
import camp3 from "../../assets/images/landing-img/camping-lake.png";
import camp4 from "../../assets/images/landing-img/camping-sunrise.jpg";

import SearchBar from "./components/SearchBar";
import DayPicker from "../../shared/components/DatePicker";
import "react-datepicker/dist/react-datepicker.css";

const Landing: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>("Show All");
  const [selectedNights, setSelectedNights] = useState<string>("Show All");

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    if (event.target.id === "select-type") {
      setSelectedType(event.target.value);
    } else {
      setSelectedNights(event.target.value);
    }
  };

  return (
    <Fragment>
      <main className="landing">
        <div className="main-container">
          <h1>Let's Go Camping!</h1>
          <div className="search-bar-container">
            <SearchBar />
          </div>
        </div>
      </main>
      <div className="promo-bar"></div>
      <div className="intro-container">
        <div className="left-side">
          <div className="left-content">
            <h2>Discover Your Next Camping Adventure</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua."
              translates to "Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.
            </p>
            <button className="start-btn">START</button>
          </div>
        </div>
        <div className="right-side">
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
        </div>
      </div>
    </Fragment>
  );
};

export default Landing;
