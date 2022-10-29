import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import axios from "axios";

const URL = "http://localhost:5000/api";

const EditUser = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
  });
  const { id } = useParams();
  const fetchDetails = async () => {
    const res = await axios.get(`${URL}/${id}`);
    setUser(res.data.data);
  };
  useEffect(() => {
    fetchDetails();
  }, []);
  const inputHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const submitForm = async (e) => {
    e.preventDefault();
    const response = await axios.put(`${URL}/${id}`, user);
    // console.log(response.data);
    if (response.data.success) {
      navigate("/allusers");
    } else {
      alert("error");
    }
  };
  console.log("user", user);
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
              value={user.name}
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
              value={user.email}
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

export default EditUser;
