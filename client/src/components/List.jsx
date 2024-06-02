import React from "react";
import "../stylesheet/List.css";
import Card from "../components/Card";
import { listData } from "../data/dummyList";
import "../stylesheet/List.css";

const List = () => {
  return (
    <div className="list">
      {listData.map((item, index) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};

export default List;
