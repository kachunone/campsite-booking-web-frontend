import React from "react";
import campfire from "../../../assets/images/landing-img/camping-sunrise.jpg";
import styles from "./Campsite.module.css";
import { Col, Row, Card, ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

interface Campsite {
  id: number;
  title: string;
  description: string;
  equipments: string[];
  region: string;
  price: number;
  image: string;
}

const Campsite: React.FC<Campsite> = (campsite) => {
  const navigate = useNavigate();

  return (
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
        <Card.Text className={styles.card_description}>
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
          <Card.Text className={styles.card_equipments}>
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
            className={styles.card_btn}
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
  );
};

export default Campsite;
