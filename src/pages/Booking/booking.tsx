import React, { useState, useEffect, ChangeEvent, useContext } from "react";
import "./booking.css";
import { useLocation, Navigate } from "react-router-dom";
import DayPicker from "../Landing/components/DatePicker";
import { Col, Row, Card, ListGroup, Container, Button } from "react-bootstrap";
import ApiService from "../../shared/services/ApiService";

interface Campsite {
  _id: string;
  title: string;
  description: string;
  equipments: string[];
  region: string;
  price: number;
  image: string;
  bookings: { start: Date; end: Date }[];
}

interface BookingData {
  campsiteId: string;
  start: Date;
  end: Date;
}

const Booking: React.FC = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  //prevent directly accessing via url
  const { state } = useLocation();
  const isNavigated: boolean = state && state.campsite;
  if (!isNavigated) {
    return <Navigate to="/landing" replace />;
  }

  const campsiteInfo: Campsite = state.campsite;

  const campsiteBookedDates = campsiteInfo.bookings.map((booking) => {
    return {
      start: new Date(booking.start),
      end: new Date(booking.end),
    };
  });

  const onChangeDates = (dates: [Date, Date]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const bookBtnHandler = async () => {
    if (startDate === null || endDate === null) {
      return alert("Please select Dates before submit your booking.");
    }

    const booking: BookingData = {
      campsiteId: campsiteInfo._id,
      start: startDate,
      end: endDate,
    };

    try {
      const response = await ApiService.createBooking(booking);
      if (response.status === 201) {
        alert("Your booking is comfirmed");
      } else {
        alert("You booking cannot be processed!");
      }
    } catch (error) {
      console.error("Error fetching:", error);
    }
  };

  return (
    <Container fluid className="booking">
      <Row className="detail-card-container" style={{ marginTop: "5rem" }}>
        <Col xs={12} sm={12} md={12} lg={12} xl={5} xxl={5}>
          <Card.Img
            style={{
              borderRadius: "5px",
              height: "100%",
              objectFit: "cover",
            }}
            src={`${process.env.REACT_APP_BASE_URL}/${campsiteInfo.image}`}
          />
        </Col>
        <Col>
          <Card
            style={{
              borderStyle: "none",
              height: "100%",
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
                      excludeDateIntervals={campsiteBookedDates}
                    />
                  </Col>
                  <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                    <button className="book-btn" onClick={bookBtnHandler}>
                      Book
                    </button>
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
