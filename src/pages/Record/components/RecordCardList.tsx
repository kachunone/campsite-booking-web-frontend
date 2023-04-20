import React, { FC } from "react";

interface Props<T> {
  keyField: keyof T;
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

const List: FC<Props<any>> = ({ items, renderItem, keyField }) => {
  return (
    <div>
      {items.map((item) => (
        <React.Fragment key={item[keyField]}>{renderItem(item)}</React.Fragment>
      ))}
    </div>
  );
};

export default List;
