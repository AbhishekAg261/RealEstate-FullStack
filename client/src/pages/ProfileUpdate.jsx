import React, { useContext, useState } from "react";
import "../stylesheet/ProfileUpdate.css";
import { AuthContext } from "../store/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import UploadWidget from "../components/UploadWidget";

const ProfileUpdate = () => {
  const [error, setError] = useState("");
  const { currentUser, updateUser } = useContext(AuthContext);
  const [newAvatar, setNewAvatar] = useState(currentUser.avatar);
  const navigate = useNavigate();

  const defaultProfile = {
    username: currentUser.username,
    email: currentUser.email,
    password: "",
    avatar: currentUser.avatar,
  };

  const [profile, setProfile] = useState(defaultProfile);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setProfile({
      ...profile,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    const { username, email, password, avatar } = profile;
    e.preventDefault();
    setError("");
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };
    try {
      const response = await axios.put(
        `http://localhost:8800/api/users/${currentUser._id}`,
        {
          username,
          email,
          password,
          avatar: newAvatar,
        },
        config
      );

      updateUser(response.data);
      setProfile(defaultProfile);
      navigate("/profile");
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <div className="profileUpdatePage">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Update Profile</h1>
          <div className="item">
            <label htmlFor="username">Username</label>
            <input
              value={profile.username}
              onChange={handleInput}
              id="username"
              name="username"
              type="text"
            />
          </div>
          <div className="item">
            <label htmlFor="email">Email</label>
            <input
              value={profile.email}
              onChange={handleInput}
              id="email"
              name="email"
              type="email"
            />
          </div>
          <div className="item">
            <label htmlFor="password">Password</label>
            <input
              value={profile.password}
              onChange={handleInput}
              id="password"
              name="password"
              type="password"
            />
          </div>
          <button>Update</button>
          {error && <span>{error}</span>}
        </form>
      </div>
      <div className="sideContainer">
        <img src={newAvatar || "/noavatar.jpg"} alt="" className="avatar" />
        <UploadWidget
          uwConfig={{
            cloudName: "djull9qud",
            uploadPreset: "estate",
            multiple: false,
            maxImageFileSize: 2000000,
            folder: "avatars",
          }}
          setNewAvatar={setNewAvatar}
        />
      </div>
    </div>
  );
};

export default ProfileUpdate;
