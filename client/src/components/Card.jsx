import React from "react";
import "../stylesheet/Card.css";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <div className="card">
      <Link to={`/single/${item._id}`} className="imageContainer">
        <img
          src={item.images[0] ? item.images[0] : "/bath.png"}
          alt="/bath.png"
        />
      </Link>
      <div className="textContainer">
        <h2 className="title">
          <Link to={`/single/${item._id}`}>{item.title}</Link>
        </h2>
        <p className="address">
          <img
            src="/pin.png"
            alt="https://images.unsplash.com/photo-1673217233981-0151509bbf06?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2UlMjBvZiUyMGElMjBob3RlbHxlbnwwfHwwfHx8MA%3D%3D"
          />
          <span>{item.address}</span>
        </p>
        <p className="price">$ {item.price}</p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src="/bed.png" alt="" />
              <span>{item.bedroom} bedroom</span>
            </div>
            <div className="feature">
              <img src="/bath.png" alt="" />
              <span>{item.bathroom} bathroom</span>
            </div>
          </div>
          <div className="icons">
            <div className="icon">
              <img src="/save.png" alt="" />
            </div>
            <div className="icon">
              <img src="/chat.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
