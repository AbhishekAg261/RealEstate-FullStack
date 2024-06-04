import React, { useContext, useEffect } from "react";
import "../stylesheet/List.css";
import Card from "../components/Card";
import { listData } from "../data/dummyList";
import "../stylesheet/List.css";
import { AuthContext } from "../store/AuthContext";

const List = () => {
  const data = listData;
  const { filterData } = useContext(AuthContext);
  console.log(filterData);

  return (
    <div className="list">
      {listData.map((item, index) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};

export default List;
