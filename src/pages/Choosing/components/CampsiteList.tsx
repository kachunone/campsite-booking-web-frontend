import React from "react";
import campfire from "../../../assets/images/landing-img/camping-sunrise.jpg";
import "./CampsiteList.css";
import { Col, Row, Card, ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Display } from "react-bootstrap-icons";

interface Props {
  campsiteList: {
    id: number;
    title: string;
    description: string;
    equipments: string[];
    region: string;
    price: number;
    image: string;
  }[];
}

const CampsiteList: React.FC<Props> = (props) => {
  const navigate = useNavigate();

  return (
    <Row>
      {props.campsiteList.map((campsite) => (
        <Col xs={12} sm={12} md={6} lg={6} xl={4} xxl={3}>
          <Card
            style={{
              borderStyle: "none",
              margin: "8px",
            }}
            bg="dark"
            text="light"
          >
            <Card.Img
              style={{
                height: "10rem",
                objectFit: "cover",
              }}
              src={campsite.image}
            />
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
                <button
                  className="card-btn"
                  onClick={() => {
                    navigate("/booking", {
                      state: { campsite: campsite },
                    });
                  }}
                >
                  DETAILS
                </button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default CampsiteList;
