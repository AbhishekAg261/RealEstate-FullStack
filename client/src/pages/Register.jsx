import React from "react";
import "../stylesheet/Register.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const defaultRegister = {
  username: "",
  email: "",
  password: "",
};

const Register = () => {
  const [register, setRegister] = useState(defaultRegister);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  const Navigate = useNavigate();

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setRegister({
      ...register,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    const { username, email, password } = register;
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const response = await axios.post(
        "http://localhost:8800/api/auth/register",
        {
          username,
          email,
          password,
        }
      );
      if (response) {
        setRegister(defaultRegister);
        Navigate("/login");
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
            value={register.username}
            onChange={handleInput}
            name="username"
            type="text"
            placeholder="Username"
          />
          <input
            value={register.email}
            onChange={handleInput}
            name="email"
            type="text"
            placeholder="Email"
          />
          <input
            value={register.password}
            onChange={handleInput}
            name="password"
            type="password"
            placeholder="Password"
          />
          <button disabled={isLoading}>Register</button>
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

export default Register;
