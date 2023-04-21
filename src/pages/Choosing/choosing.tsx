import React from "react";
import "./choosing.css";
import SearchBar from "../Landing/components/SearchBar";
import Campsite from "./components/Campsite";
import CampsiteList from "./components/CampsiteList";
import { Col, Row, Container } from "react-bootstrap";
import "./choosing.css";

interface CampsiteType {
  id: number;
  title: string;
  description: string;
  equipments: string[];
  region: string;
  price: number;
  image: string;
}

const campsites: CampsiteType[] = [
  {
    id: 1,
    title: "Campsite 1",
    description: "A beautiful campsite surrounded by nature.",
    equipments: ["Equipments", "Singe tent", "3 tents", "Trailer up to 18ft"],
    region: "Pacific Northwest",
    price: 75,
    image:
      "https://assetsw.bus.com/content/uploads/2019/05/27144854/toronto-camping-bus-rentals.jpg",
  },
  {
    id: 2,
    title: "Campsite 2",
    description: "An adventure awaits you at this remote campsite.",
    equipments: ["Equipments", "Singe tent", "3 tents", "Trailer up to 18ft"],
    region: "Rocky Mountains",
    price: 100,
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2tpbGxpbmclMjBjYW1waW5nfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 3,
    title: "Campsite 3",
    description: "Relax and unwind at this serene campsite.",
    equipments: ["Equipments", "Singe tent", "3 tents", "Trailer up to 18ft"],
    region: "Southeast",
    price: 50,
    image:
      "https://www.travelandleisure.com/thmb/bmnzMXrvf8089l0Rb9h7GON8Axk=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/lake-wenatchee-state-park_HERO_CAMPWA0922-09e49c99f7fd4a3b9238bdfd4475928b.jpg",
  },
  {
    id: 4,
    title: "Campsite 1",
    description: "A beautiful campsite surrounded by nature.",
    equipments: ["Equipments", "Singe tent", "3 tents", "Trailer up to 18ft"],
    region: "Pacific Northwest",
    price: 75,
    image:
      "https://assetsw.bus.com/content/uploads/2019/05/27144854/toronto-camping-bus-rentals.jpg",
  },
  {
    id: 5,
    title: "Campsite 2",
    description: "An adventure awaits you at this remote campsite.",
    equipments: ["Equipments", "Singe tent", "3 tents", "Trailer up to 18ft"],
    region: "Rocky Mountains",
    price: 100,
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2tpbGxpbmclMjBjYW1waW5nfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 6,
    title: "Campsite 3",
    description: "Relax and unwind at this serene campsite.",
    equipments: ["Equipments", "Singe tent", "3 tents", "Trailer up to 18ft"],
    region: "Southeast",
    price: 50,
    image:
      "https://www.travelandleisure.com/thmb/bmnzMXrvf8089l0Rb9h7GON8Axk=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/lake-wenatchee-state-park_HERO_CAMPWA0922-09e49c99f7fd4a3b9238bdfd4475928b.jpg",
  },
  {
    id: 7,
    title: "Campsite 1",
    description: "A beautiful campsite surrounded by nature.",
    equipments: ["Equipments", "Singe tent", "3 tents", "Trailer up to 18ft"],
    region: "Pacific Northwest",
    price: 75,
    image:
      "https://assetsw.bus.com/content/uploads/2019/05/27144854/toronto-camping-bus-rentals.jpg",
  },
  {
    id: 8,
    title: "Campsite 2",
    description: "An adventure awaits you at this remote campsite.",
    equipments: ["Equipments", "Singe tent", "3 tents", "Trailer up to 18ft"],
    region: "Rocky Mountains",
    price: 100,
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2tpbGxpbmclMjBjYW1waW5nfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 9,
    title: "Campsite 3",
    description: "Relax and unwind at this serene campsite.",
    equipments: ["Equipments", "Singe tent", "3 tents", "Trailer up to 18ft"],
    region: "Southeast",
    price: 50,
    image:
      "https://www.travelandleisure.com/thmb/bmnzMXrvf8089l0Rb9h7GON8Axk=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/lake-wenatchee-state-park_HERO_CAMPWA0922-09e49c99f7fd4a3b9238bdfd4475928b.jpg",
  },
  {
    id: 10,
    title: "Campsite 1",
    description: "A beautiful campsite surrounded by nature.",
    equipments: ["Equipments", "Singe tent", "3 tents", "Trailer up to 18ft"],
    region: "Pacific Northwest",
    price: 75,
    image:
      "https://assetsw.bus.com/content/uploads/2019/05/27144854/toronto-camping-bus-rentals.jpg",
  },
  {
    id: 11,
    title: "Campsite 2",
    description: "An adventure awaits you at this remote campsite.",
    equipments: ["Equipments", "Singe tent", "3 tents", "Trailer up to 18ft"],
    region: "Rocky Mountains",
    price: 100,
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2tpbGxpbmclMjBjYW1waW5nfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 12,
    title: "Campsite 3",
    description: "Relax and unwind at this serene campsite.",
    equipments: ["Equipments", "Singe tent", "3 tents", "Trailer up to 18ft"],
    region: "Southeast",
    price: 50,
    image:
      "https://www.travelandleisure.com/thmb/bmnzMXrvf8089l0Rb9h7GON8Axk=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/lake-wenatchee-state-park_HERO_CAMPWA0922-09e49c99f7fd4a3b9238bdfd4475928b.jpg",
  },
];

const renderCampsite = (campsite: CampsiteType) => {
  return <Campsite {...campsite} />;
};

const Choosing: React.FC = () => {
  return (
    <Container fluid>
      <Row>
        <Col className="choosing-page">
          <div className="search-bar-container">
            <SearchBar />
          </div>
          <div className="campsite-list-container">
            <CampsiteList
              items={campsites}
              renderItem={renderCampsite}
              keyField="id"
            ></CampsiteList>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Choosing;
