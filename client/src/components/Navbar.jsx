import React, { useState, useContext } from "react";
import "../stylesheet/Navbar.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../store/AuthContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { currentUser } = useContext(AuthContext);
  return (
    <>
      <nav className="nav">
        <div className="left">
          <Link className="logo" to="/">
            <img src="/logo final.png" alt="logo" />
            <span>Home Heaven</span>
          </Link>
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Contact</a>
          <a href="">Agents</a>
        </div>
        <div className="right">
          {currentUser ? (
            <div className="user">
              <img src={currentUser.avatar || "./noavatar.jpg"} alt="" />
              <span>{currentUser.username}</span>
              <Link to="/profile" className="profile">
                <div className="notification">3</div>
                <span>Profile</span>
              </Link>
            </div>
          ) : (
            <>
              <Link to="/login">Sign in</Link>
              <Link to="/register" className="register">
                Sign up
              </Link>
            </>
          )}
          <div className="menuIcon" onClick={() => setOpen(!open)}>
            <img src="/menu.png" alt="" />
          </div>
          <div className={open ? "menu active" : "menu"}>
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Contact</a>
            <a href="">Agents</a>
            <a href="">Sign In</a>
            <a href="">Sign Up</a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
