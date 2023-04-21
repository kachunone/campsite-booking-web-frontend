import React from "react";
import { Col, Row } from "react-bootstrap";
import styles from "./CampsiteList.module.css";

interface Props<T> {
  keyField: keyof T;
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

const CampsiteList: React.FC<Props<any>> = ({
  items,
  renderItem,
  keyField,
}) => {
  return (
    <Row>
      {items.map((item) => (
        <Col
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={4}
          xxl={3}
          className={styles.listContainer}
          key={item[keyField]}
        >
          <React.Fragment>{renderItem(item)}</React.Fragment>
        </Col>
      ))}
    </Row>
  );
};

export default CampsiteList;
