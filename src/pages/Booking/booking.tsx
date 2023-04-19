import React, { useState, useEffect, ChangeEvent } from "react";
import "./booking.css";
import { useLocation } from "react-router-dom";
import DayPicker from "../Landing/components/DatePicker";
import { Col, Row, Card, ListGroup, Container, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";

interface Campsite {
  id: number;
  title: string;
  description: string;
  equipments: string[];
  region: string;
  price: number;
  image: string;
}

const Booking: React.FC = () => {
  const { state } = useLocation();
  const campsiteInfo: Campsite = state.campsite;

  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const onChangeDates = (dates: [Date, Date]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <Container fluid className="booking">
      <Row
        style={{
          width: "80vw",
          backgroundColor: "#efe1e8",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          rowGap: "1rem",
          paddingTop: "0.6rem",
          paddingBottom: "0.6rem",
          marginTop: "5rem",
          marginBottom: "2rem",
          borderRadius: "8px",
        }}
      >
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={6}
          xl={6}
          xxl={6}
          className="booking-img-container"
        >
          <Card.Img
            style={{
              borderRadius: "5px",
              height: "100%",
              // maxHeight: "500px",
              objectFit: "cover",
            }}
            src={campsiteInfo.image}
          />
        </Col>
        <Col className="booking-card-container">
          <Card
            style={{
              borderStyle: "none",
              height: "100%",
              // minHeight: "10rem",
              // borderRadius: "20px",
            }}
            bg="dark"
            text="light"
          >
            <Card.Body style={{}}>
              <Card.Title>{campsiteInfo.title}</Card.Title>
              <Card.Text>{campsiteInfo.description}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>
                <Card.Text>
                  Region:{" "}
                  <span style={{ fontWeight: "bold" }}>
                    {campsiteInfo.region}
                  </span>
                </Card.Text>
              </ListGroup.Item>
              <ListGroup.Item style={{}}>
                <Card.Text>
                  Equipments:{" "}
                  <span style={{ fontWeight: "bold" }}>
                    {campsiteInfo.equipments.join(", ")}
                  </span>
                </Card.Text>
              </ListGroup.Item>
              <ListGroup.Item>
                <Card.Text>
                  Price:{" "}
                  <span style={{ fontWeight: "bold", fontSize: "20px" }}>
                    ${campsiteInfo.price}
                  </span>
                </Card.Text>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row style={{ rowGap: "8px" }}>
                  <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                    <DayPicker
                      startDate={startDate}
                      endDate={endDate}
                      onChangeHander={onChangeDates}
                    />
                  </Col>
                  <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                    <button className="book-btn">Book</button>
                  </Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Booking;
