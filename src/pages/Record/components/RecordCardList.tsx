import React, { FC } from "react";
import { Col, Row } from "react-bootstrap";
import styles from "./RecordCardList.module.css";

interface Props<T> {
  keyField: keyof T;
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

const List: FC<Props<any>> = ({ items, renderItem, keyField }) => {
  return (
    <Col className={styles.listContainer}>
      {items.map((item) => (
        <React.Fragment key={item[keyField]}>{renderItem(item)}</React.Fragment>
      ))}
    </Col>
  );
};

export default List;
