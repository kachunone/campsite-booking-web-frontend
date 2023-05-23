import React, { Fragment, useContext } from "react";
import styles from "./RecordCard.module.css";
import { Row, Col, Card, Container } from "react-bootstrap";
import ApiService from "../../../shared/services/ApiService";
import { BookingsContext } from "../../../shared/contexts/bookings-context";

const SERVER_ENDPOINT = "http://localhost:8080/";

interface RecordCardProps {
  _id: string;
  createDate: Date;
  start: Date;
  end: Date;
  campsite: { _id: string; image: string };
}

const RecordCard: React.FC<RecordCardProps> = (props) => {
  const { bookingRecordList, setBookingRecordList } =
    useContext(BookingsContext);

  const cancelHandler = async () => {
    try {
      const response = await ApiService.cancelBooking(props._id);
      if (response.status === 201) {
        const updatedBookingList = bookingRecordList.filter(
          (booking) => booking._id !== props._id
        );
        setBookingRecordList(updatedBookingList);
        console.log(bookingRecordList);
        alert("Your booking is canceled");
      } else {
        alert("Your booking cannot be canceled!");
      }
    } catch (error) {
      console.error("Error fetching:", error);
    }
  };

  return (
    <Container className={styles.cardContainer} fluid>
      <Row className={styles.cardHeader}>
        <p className={[styles.p, styles.p_title].join(" ")}>
          Booking #{props._id}
        </p>
      </Row>
      <Row className={styles.cardBody}>
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={7}
          xxl={7}
          className={styles.imgContainer}
        >
          <Card.Img
            className={styles.img}
            src={`${SERVER_ENDPOINT}${props.campsite.image}`}
          />
        </Col>
        <Col
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={3}
          xxl={3}
          className={styles.cardInfo}
        >
          <>
            <p className={styles.p}>Booking Date: </p>
            <span>{new Date(props.createDate).toLocaleDateString()}</span>
          </>
          <>
            <p className={styles.p}>Check In: </p>
            <span>{new Date(props.start).toLocaleDateString()}</span>
          </>
          <>
            <p className={styles.p}>Check out: </p>
            <span>{new Date(props.end).toLocaleDateString()}</span>
          </>
        </Col>
        <Col
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={2}
          xxl={2}
          className={styles.cardBtnContainer}
        >
          <button className={styles.button} onClick={cancelHandler}>
            Cancel
          </button>
        </Col>
      </Row>
    </Container>
  );
};

export default RecordCard;
