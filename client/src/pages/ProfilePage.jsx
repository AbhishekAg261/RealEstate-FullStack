import React, { useContext, useEffect, useState } from "react";
import "../stylesheet/ProfilePage.css";
import List from "../components/List";
import Chat from "../components/Chat";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../store/AuthContext";

const ProfilePage = () => {
  const { updateUser, currentUser } = useContext(AuthContext);

  const [list, setList] = useState();

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8800/api/auth/logout"
      );
      navigate("/");
      updateUser(null);
    } catch (err) {
      console.log(err);
    }
  };

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
    params: {
      userId: currentUser._id,
    },
    withCredentials: true,
  };

  const fetchAllProfileData = async () => {
    const response = await axios.get(
      "http://localhost:8800/api/users/profilePosts",
      config
    );
    setList(response.data);
  };

  const { userPosts, savedPosts } = { ...list };

  useEffect(() => {
    fetchAllProfileData();
  }, []);

  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <Link to="/profile/update">
              <button>Update Profile</button>
            </Link>
          </div>
          <div className="info">
            <span>
              Avatar:
              <img src={currentUser.avatar || "./noavatar.jpg"} alt="" />
            </span>
            <span>
              Username: <b>{currentUser.username}</b>
            </span>
            <span>
              E-mail: <b>{currentUser.username}</b>
            </span>
            <button onClick={handleLogout}>Logout</button>
          </div>
          <div className="title">
            <h1>My List</h1>
            <Link to="/add">
              <button>Create New Post</button>
            </Link>
          </div>
          {userPosts && <List posts={userPosts} />}

          <div className="title">
            <h1>Saved List</h1>
          </div>
          {savedPosts && <List posts={savedPosts} />}
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chat />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
