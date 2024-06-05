import "../stylesheet/SearchBar.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const types = ["buy", "rent"];

const SearchBar = () => {
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    minPirce: 0,
    maxPrice: 100000,
  });

  const switchType = (val) => {
    setQuery((prev) => ({
      ...prev,
      type: val,
    }));
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuery({
      ...query,
      [name]: value,
    });
  };

  return (
    <div className="searchBar">
      <div className="type">
        {types.map((type, index) => {
          return (
            <button
              key={index}
              onClick={() => switchType(type)}
              className={query.type === type ? "active" : ""}
            >
              {type}
            </button>
          );
        })}
      </div>
      <form action="">
        <input
          onChange={handleChange}
          type="text"
          name="location"
          placeholder="City Location"
        />
        <input
          type="number"
          name="minPrice"
          min={0}
          max={1000000}
          placeholder="Min Price"
          onChange={handleChange}
        />
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={1000000}
          placeholder="Max Price"
          onChange={handleChange}
        />
        <Link
          to={`/list?mode=${query.type}&city=${query.location}&minPrice=${query.minPirce}&maxPrice=${query.maxPrice}`}
        >
          <img src="/search.png" alt="" />
        </Link>
      </form>
    </div>
  );
};

export default SearchBar;
