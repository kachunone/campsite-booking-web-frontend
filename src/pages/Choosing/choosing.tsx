import React, { useEffect, useState } from "react";
import "./choosing.css";
import SearchBar from "../Landing/components/SearchBar";
import Campsite from "./components/Campsite";
import CampsiteList from "./components/CampsiteList";
import { Col, Row, Container } from "react-bootstrap";
import ApiService from "../../shared/services/ApiService";
import { useLocation } from "react-router-dom";
import { filter } from "../../shared/utils/helpers";

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

interface UserInputs {
  equipment: string | "Equipments";
  region: string | "Regions";
  start: Date | null;
  end: Date | null;
}

const renderCampsite = (campsite: CampsiteType) => {
  return <Campsite {...campsite} />;
};

const Choosing: React.FC = () => {
  const [campsites, setCampsites] = useState<CampsiteType[]>([]);

  let equipment = "Equipments";
  let region = "Regions";
  let start = null;
  let end = null;

  const { state } = useLocation();
  if (state) {
    equipment = state.type;
    region = state.region;
    start = state.start;
    end = state.end;
  }

  useEffect(() => {
    const fetchCampsites = async () => {
      try {
        const data = await ApiService.getCampsites();
        if (state) {
          console.log("hello");
          const userInputs: UserInputs = {
            equipment: state.type,
            region: state.region,
            start: state.start,
            end: state.end,
          };
          const result = filter(userInputs, data);
          setCampsites(result);
        } else {
          setCampsites(data);
        }
      } catch (error) {
        console.error("Error fetching campsites:", error);
      }
    };
    fetchCampsites();
  }, []);

  const onSearchPressed = async (
    equipment: string,
    region: string,
    start: Date | null,
    end: Date | null
  ) => {
    try {
      const data = await ApiService.getCampsites();
      const userInputs: UserInputs = {
        equipment: equipment,
        region: region,
        start: start,
        end: end,
      };
      const result = filter(userInputs, data);
      setCampsites(result);
    } catch (error) {
      console.error("Error fetching campsites:", error);
    }
  };

  return (
    <Container fluid>
      <Row>
        <Col className="choosing-page">
          <div className="search-bar-container">
            <SearchBar
              selectedEquipment={equipment}
              selectedRegion={region}
              selectedStart={start}
              selectedEnd={end}
              onSearch={onSearchPressed}
              page="choosing"
            />
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
