import React from "react";
import campfire from "../../../assets/images/landing-img/camping-fire.png";
import "./CampsiteList.css";
import { Col, Row, Card, ListGroup } from "react-bootstrap";

interface Props {
  campsiteList: {
    id: number;
    title: string;
    description: string;
    equipments: string[];
    region: string;
    price: number;
  }[];
}

const CampsiteList: React.FC<Props> = (props) => {
  return (
    <Row className="gx-0">
      {props.campsiteList.map((campsite) => (
        <Col xs={12} sm={12} md={6} lg={3}>
          <Card style={{ margin: "10px" }} bg="dark" text="light">
            <Card.Img variant="top" src={campfire} />
            <Card.Body style={{ height: "8rem" }}>
              <Card.Title>{campsite.title}</Card.Title>
              <Card.Text className="card-description">
                {campsite.description}
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>
                <Card.Text>
                  Region:{" "}
                  <span style={{ fontWeight: "bold" }}>{campsite.region}</span>
                </Card.Text>
              </ListGroup.Item>
              <ListGroup.Item style={{ height: "4rem" }}>
                <Card.Text className="card-equipments">
                  Equipments:{" "}
                  <span style={{ fontWeight: "bold" }}>
                    {campsite.equipments.join(", ")}
                  </span>
                </Card.Text>
              </ListGroup.Item>
              <ListGroup.Item>
                <Card.Text>
                  Price:{" "}
                  <span style={{ fontWeight: "bold", fontSize: "20px" }}>
                    ${campsite.price}
                  </span>
                </Card.Text>
              </ListGroup.Item>
              <ListGroup.Item>
                <button className="card-btn">DETAILS</button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default CampsiteList;
