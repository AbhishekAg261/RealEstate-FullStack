import React, { useEffect, useState, useContext } from "react";
import "../stylesheet/Filter.css";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
// import { AuthContext } from "../store/AuthContext";

const Filter = ({ handleFilterData }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState({
    mode: searchParams.get("mode") || "",
    city: searchParams.get("city") || "",
    property: searchParams.get("property") || "",
    minPrice: searchParams.get("minPrice") || 0,
    maxPrice: searchParams.get("maxPrice") || 100000,
    bedroom: searchParams.get("bedroom") || "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuery({
      ...query,
      [name]: value,
    });
  };

  // const { updateFilterData } = useContext(AuthContext);

  const fetchPosts = async (req, res) => {
    try {
      const response = await axios.get("http://localhost:8800/api/posts", {
        params: {
          mode: query.mode,
          city: query.city,
          property: query.property,
          minPrice: query.minPrice,
          maxPrice: query.maxPrice,
          bedroom: query.bedroom,
        },
      });
      console.log("test 1 done");
      console.log(response.data);
      handleFilterData(response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const handleFilter = () => {
    setSearchParams(query);
    fetchPosts();
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="filter">
      <h1>
        Search results for <b>{searchParams.get("city")}</b>
      </h1>
      <div className="top">
        <div className="item">
          <label htmlFor="city">Location</label>
          <input
            onChange={handleChange}
            type="text"
            id="city"
            name="city"
            placeholder="City Location"
            defaultValue={query.city}
          />
        </div>
      </div>
      <div className="bottom">
        <div className="item">
          <label htmlFor="mode">Mode</label>
          <select
            defaultValue={query.mode}
            onChange={handleChange}
            name="mode"
            id="mode"
          >
            <option value="">any</option>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="property">Property</label>
          <select
            defaultValue={query.property}
            onChange={handleChange}
            name="property"
            id="property"
          >
            <option value="">any</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="condo">Condo</option>
            <option value="land">Land</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="minPrice">Min Price</label>
          <input
            defaultValue={query.minPrice}
            onChange={handleChange}
            type="number"
            id="minPrice"
            name="minPrice"
            placeholder="any"
          />
        </div>
        <div className="item">
          <label htmlFor="maxPrice">Max Price</label>
          <input
            defaultValue={query.maxPrice}
            onChange={handleChange}
            type="text"
            id="maxPrice"
            name="maxPrice"
            placeholder="any"
          />
        </div>
        <div className="item">
          <label htmlFor="bedroom">Bedroom</label>
          <input
            defaultValue={query.bedroom}
            onChange={handleChange}
            type="text"
            id="bedroom"
            name="bedroom"
            placeholder="any"
          />
        </div>
        <button onClick={handleFilter}>
          <img src="/search.png" alt="" />
        </button>
      </div>
    </div>
  );
};

export default Filter;
