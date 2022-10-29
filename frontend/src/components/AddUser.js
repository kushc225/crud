import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const URL = "http://localhost:5000/api";
const AddUser = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "" });
  const inputHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const submitForm = async (e) => {
    const { email, name } = form;
    e.preventDefault();
    const response = await axios.post(`${URL}/`, { email, name });
    console.log(response.data);
    if (response.data.success) {
      navigate("/allusers");
    } else {
      alert("error");
    }

    // fetch method
    // const response = await fetch(URL, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ email, name }),
    // });
    // const res = await response.json();
    // console.log(res);
  };
  return (
    <>
      <div className="container">
        <form onSubmit={submitForm}>
          <div className="mb-3">
            <label className="form-label">name</label>
            <input
              onChange={(e) => inputHandler(e)}
              type="name"
              className="form-control"
              id="name"
              name="name"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              onChange={(e) => inputHandler(e)}
              type="email"
              className="form-control"
              id="email"
              name="email"
              aria-describedby="emailHelp"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default AddUser;
