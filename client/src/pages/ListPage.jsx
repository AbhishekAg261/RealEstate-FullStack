import "../stylesheet/ListPage.css";
import React from "react";
import { listData } from "../data/dummyList";
import Filter from "../components/Filter";
import Card from "../components/Card";
import Map from "../components/Map";

const ListPage = () => {
  const data = listData;
  return (
    <div className="listPage">
      <div className="list-container">
        <div className="wrapper">
          <Filter />
          {data.map((item, index) => {
            return <Card key={item.id} item={item} />;
          })}
        </div>
      </div>
      <div className="map-container">
        <Map items={data} />
      </div>
    </div>
  );
};

export default ListPage;
