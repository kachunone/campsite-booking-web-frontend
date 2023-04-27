import React from "react";
import styles from "./RecordCard.module.css";
import { Row, Col, Card, Container } from "react-bootstrap";

interface RecordCardProps {
  bookingId: string;
  bookingDate: Date;
  customerName: string;
  customerEmail: string;
}

const RecordCard: React.FC<RecordCardProps> = (props) => {
  return (
    <Container className={styles.cardContainer} fluid>
      <Row className={styles.cardHeader}>
        <p className={[styles.p, styles.p_title].join(" ")}>
          Booking #{props.bookingId}
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
            src={
              "https://hips.hearstapps.com/hmg-prod/images/sunrise-quotes-21-1586892331.jpg?crop=1.00xw:0.895xh;0,0&resize=1200:*"
            }
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
            <span>{props.bookingDate.toLocaleDateString()}</span>
          </>
          <>
            <p className={styles.p}>Check In: </p>
            <span>2023-04-22</span>
          </>
          <>
            <p className={styles.p}>Check out: </p>
            <span>2023-04-22</span>
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
          <button className={styles.button}>Update</button>
          <button className={styles.button}>Cancel</button>
        </Col>
      </Row>
    </Container>
  );
};

export default RecordCard;
