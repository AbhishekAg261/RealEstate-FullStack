import "../stylesheet/SearchBar.css";

import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

const types = ["buy", "rent"];

const SearchBar = () => {
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    minPirce: 0,
    maxPrice: 0,
  });

  const switchType = (val) => {
    setQuery((prev) => ({
      ...prev,
      type: val,
    }));
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
        <input type="text" name="location" placeholder="City Location" />
        <input
          type="number"
          name="minPrice"
          min={0}
          max={1000000}
          placeholder="Min Price"
        />
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={1000000}
          placeholder="Max Price"
        />
        <button>
          <CiSearch />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
