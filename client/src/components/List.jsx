import React, { useContext, useEffect } from "react";
import "../stylesheet/List.css";
import Card from "../components/Card";
import { listData } from "../data/dummyList";
import "../stylesheet/List.css";
import { AuthContext } from "../store/AuthContext";

const List = ({ posts }) => {
  return (
    <div className="list">
      {posts.map((item, index) => (
        <Card key={item._id} item={item} />
      ))}
    </div>
  );
};

export default List;
