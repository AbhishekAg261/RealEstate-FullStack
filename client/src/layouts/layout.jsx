import React, { useContext, useEffect } from "react";
import Navbar from "../components/Navbar";
import "../stylesheet/Layout.css";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../store/AuthContext";

const Layout = () => {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

const RequireAuth = () => {
  const { currentUser } = useContext(AuthContext);

  if (!currentUser) return <Navigate to="/login" />;
  else {
    return (
      <div className="layout">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="content">
          <Outlet />
        </div>
      </div>
    );
  }
};

export { Layout, RequireAuth };
