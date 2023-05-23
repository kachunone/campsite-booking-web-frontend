import React, { useEffect, useState, createContext } from "react";
import RecordCard from "./components/RecordCard";
import List from "./components/RecordCardList";
import { Container, Row, Col } from "react-bootstrap";
import ApiService from "../../shared/services/ApiService";
import { BookingsContext } from "../../shared/contexts/bookings-context";

interface RecordCardProps {
  _id: string;
  createDate: Date;
  start: Date;
  end: Date;
  campsite: { _id: string; image: string };
}

const renderCard = (booking: RecordCardProps) => {
  return <RecordCard {...booking} />;
};

const Record: React.FC = () => {
  const [bookingRecordList, setBookingRecordList] = useState<RecordCardProps[]>(
    []
  );

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const data = await ApiService.getBookingsByUserId();
        setBookingRecordList(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching campsites:", error);
      }
    };
    fetchBookings();
  }, []);

  const contextValue = {
    bookingRecordList: bookingRecordList,
    setBookingRecordList: setBookingRecordList,
  };

  return (
    <Container fluid>
      <Row>
        <Col
          className="d-grid align-items-center justify-content-center"
          style={{
            height: "100%",
            minHeight: "100vh",
            backgroundColor: "#354057",
          }}
        >
          <BookingsContext.Provider value={contextValue}>
            <List
              items={bookingRecordList}
              renderItem={renderCard}
              keyField="_id"
            ></List>
          </BookingsContext.Provider>
        </Col>
      </Row>
    </Container>
  );
};

export default Record;
