import "../stylesheet/ListPage.css";
import React, { useState } from "react";
import { listData } from "../data/dummyList";
import Filter from "../components/Filter";
import Card from "../components/Card";
import Map from "../components/Map";

const ListPage = () => {
  const data = listData;
  const [filterData, setFilterData] = useState();

  const handleFilterData = (data) => {
    setFilterData(data);
  };

  return (
    <div className="listPage">
      {filterData ? (
        <>
          <div className="list-container">
            <div className="wrapper">
              <Filter handleFilterData={handleFilterData} />
              {filterData.map((item, index) => {
                return <Card key={item.id} item={item} />;
              })}
            </div>
          </div>
          <div className="map-container">
            <Map items={filterData} />
          </div>
        </>
      ) : (
        <>
          <Filter handleFilterData={handleFilterData} />
          <h1>No result related to your search</h1>
        </>
      )}
    </div>
  );
};

export default ListPage;
