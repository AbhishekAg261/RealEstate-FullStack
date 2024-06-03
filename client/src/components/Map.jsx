import React from "react";
import "../stylesheet/Map.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Pin from "../components/Pin";

const Map = ({ items }) => {
  return (
    <MapContainer
      center={
        items.length === 1
          ? [items[0].latitude, items[0].longitude]
          : [23.2599, 77.4126]
      }
      zoom={4.5}
      scrollWheelZoom={false}
      className="map"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {items.map((item) => (
        <Pin item={item} key={item.id} />
      ))}
    </MapContainer>
  );
};

export default Map;
