import React from "react";
import campfire from "../../../assets/images/landing-img/camping-fire.png";
import "./CampsiteList.css";
import { Col, Row, Card, ListGroup } from "react-bootstrap";

const CampsiteList: React.FC = () => {
  return (
    <Row className="gx-0">
      {Array.from({ length: 9 }).map((_, idx) => (
        <Col xs={12} sm={12} md={6} lg={4}>
          <Card style={{ margin: "30px" }} bg="dark" text="light">
            <Card.Img variant="top" src={campfire} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default CampsiteList;
