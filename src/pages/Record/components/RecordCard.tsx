import React, { Fragment, useContext, useState } from "react";
import styles from "./RecordCard.module.css";
import { Row, Col, Card, Container, Button } from "react-bootstrap";
import ApiService from "../../../shared/services/ApiService";
import { BookingsContext } from "../../../shared/contexts/bookings-context";
import Modal from "react-bootstrap/Modal";

const SERVER_ENDPOINT = process.env.REACT_APP_BASE_URL;

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

  //Modal setup
  const [show, setShow] = useState(false);
  const [prompt, setPrompt] = useState("Are you sure to cancel this booking?");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const cancelHandler = async () => {
    try {
      const response = await ApiService.cancelBooking(props._id);
      if (response.status === 201) {
        const updatedBookingList = bookingRecordList.filter(
          (booking) => booking._id !== props._id
        );
        setBookingRecordList(updatedBookingList);
      } else {
        setShow(true);
        setPrompt("Your booking cannot be canceled!");
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
            src={`${SERVER_ENDPOINT}/${props.campsite.image}`}
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
          <button className={styles.button} onClick={handleShow}>
            Cancel
          </button>
        </Col>
      </Row>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Prompt</Modal.Title>
        </Modal.Header>
        <Modal.Body>{prompt}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Back
          </Button>
          <Button variant="danger" onClick={cancelHandler}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default RecordCard;
