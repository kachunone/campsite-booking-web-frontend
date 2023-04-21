import React from "react";
import RecordCard from "./components/RecordCard";
import List from "./components/RecordCardList";
import { Container, Row, Col } from "react-bootstrap";

interface RecordCardProps {
  bookingId: string;
  bookingDate: Date;
  customerName: string;
  customerEmail: string;
}

const bookings: RecordCardProps[] = [
  {
    bookingId: "1234",
    bookingDate: new Date("2023-04-23"),
    customerName: "John Doe",
    customerEmail: "johndoe@example.com",
  },
  {
    bookingId: "5678",
    bookingDate: new Date("2023-04-24"),
    customerName: "Jane Smith",
    customerEmail: "janesmith@example.com",
  },
  {
    bookingId: "9012",
    bookingDate: new Date("2023-04-25"),
    customerName: "Bob Johnson",
    customerEmail: "bobjohnson@example.com",
  },
];

const renderCard = (booking: RecordCardProps) => {
  return <RecordCard {...booking} />;
};

const Record: React.FC = () => {
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
          <List
            items={bookings}
            renderItem={renderCard}
            keyField="bookingId"
          ></List>
        </Col>
      </Row>
    </Container>
  );
};

export default Record;
