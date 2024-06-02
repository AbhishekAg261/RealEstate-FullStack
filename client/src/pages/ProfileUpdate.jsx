import React, { useContext, useState } from "react";
import "../stylesheet/ProfileUpdate.css";
import { AuthContext } from "../store/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import UploadWidget from "../components/UploadWidget";

const ProfileUpdate = () => {
  const [error, setError] = useState("");
  const { currentUser, updateUser } = useContext(AuthContext);
  const [avatar, setAvatar] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const inputs = Object.fromEntries(formData);

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
          username: inputs.username,
          email: inputs.email,
          password: inputs.password,
          avatar: avatar[0],
        },
        config
      );

      updateUser(response.data);
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
              defaultValue={currentUser.username}
              id="username"
              name="username"
              type="text"
            />
          </div>
          <div className="item">
            <label htmlFor="email">Email</label>
            <input
              defaultValue={currentUser.email}
              id="email"
              name="email"
              type="email"
            />
          </div>
          <div className="item">
            <label htmlFor="password">Password</label>
            <input
              defaultValue={currentUser.password}
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
        <img
          src={avatar[0] || currentUser.avatar || "/noavatar.jpg"}
          alt=""
          className="avatar"
        />
        <UploadWidget
          uwConfig={{
            cloudName: "djull9qud",
            uploadPreset: "estate",
            multiple: false,
            maxImageFileSize: 2000000,
            folder: "avatars",
          }}
          setState={setAvatar}
        />
      </div>
    </div>
  );
};

export default ProfileUpdate;
