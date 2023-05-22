import React, { useEffect, useState } from "react";
import "./choosing.css";
import SearchBar from "../Landing/components/SearchBar";
import Campsite from "./components/Campsite";
import CampsiteList from "./components/CampsiteList";
import { Col, Row, Container } from "react-bootstrap";
import ApiService from "../../shared/services/ApiService";

interface CampsiteType {
  _id: string;
  title: string;
  description: string;
  equipments: string[];
  region: string;
  price: number;
  image: string;
  bookings: Object[];
}

const renderCampsite = (campsite: CampsiteType) => {
  return <Campsite {...campsite} />;
};

const Choosing: React.FC = () => {
  const [campsites, setCampsites] = useState<CampsiteType[]>([]);

  useEffect(() => {
    const fetchCampsites = async () => {
      try {
        const data = await ApiService.getCampsites();
        setCampsites(data);
      } catch (error) {
        console.error("Error fetching campsites:", error);
      }
    };
    fetchCampsites();
  }, []);

  return (
    <Container fluid>
      <Row>
        <Col className="choosing-page">
          <div className="search-bar-container">
            <SearchBar />
          </div>
          <div className="campsite-list-container">
            <CampsiteList
              items={campsites}
              renderItem={renderCampsite}
              keyField="_id"
            ></CampsiteList>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Choosing;
