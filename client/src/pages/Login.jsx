import React from "react";
import "../stylesheet/Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../store/AuthContext";

const defaultLogin = {
  username: "",
  password: "",
};

const Login = () => {
  const [login, setLogin] = useState(defaultLogin);

  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  const { updateUser } = useContext(AuthContext);

  const Navigate = useNavigate();

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setLogin({
      ...login,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    const { username, password } = login;
    e.preventDefault();
    setLoading(true);
    setError("");
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };
    try {
      const response = await axios.post(
        "http://localhost:8800/api/auth/login",
        {
          username,
          password,
        },
        config
      );

      if (response) {
        setLogin(defaultLogin);
        updateUser(response.data);
        Navigate("/");
      }
    } catch (err) {
      setError(err.response.data.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="registerPage">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Create an Account</h1>
          <input
            required
            minLength={3}
            maxLength={20}
            value={login.username}
            onChange={handleInput}
            name="username"
            type="text"
            placeholder="Username"
          />
          <input
            required
            value={login.password}
            onChange={handleInput}
            name="password"
            type="password"
            placeholder="Password"
          />
          <button disabled={isLoading}>Login</button>
          {error && <span>{error}</span>}
          <Link to="/login">Do you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
};

export default Login;
