import React, { useState } from "react";
import "../stylesheet/Contact.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Contact = () => {
  const [error, setError] = useState("");
  const [desc, setDesc] = useState("");

  const handleChange = (e) => {
    setDesc(e.target.value);
  };

  const Navigate = useNavigate();

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
      const response = await axios.post(
        "http://localhost:8800/api/users/contact",
        {
          contactData: {
            username: inputs.username,
            email: inputs.email,
            desc: inputs.desc,
          },
        },
        config
      );
      if (response) {
        Navigate("/");
      }
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <div className="contactPage">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Contact Us!</h1>
          <input name="username" type="text" placeholder="Username" required />
          <input name="email" type="text" placeholder="Email" required />
          <textarea
            onChange={handleChange}
            value={desc}
            name="desc"
            id="desc"
            required
          >
            Add Description....
          </textarea>
          <button>Register</button>
          {error && <span>{error}</span>}
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
};

export default Contact;
