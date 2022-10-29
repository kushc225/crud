import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
const URL = "http://localhost:5000/api/";

const AllUsers = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  const fetchAllUser = async () => {
    const response = await axios.get(URL);
    setUsers(response.data);
  };

  useEffect(() => {
    fetchAllUser();
  }, []);

  const DelHandler = async (id) => {
    const res = await axios.delete(`${URL}/${id}`);
    if (res.data.success) {
      fetchAllUser();
    } else {
      alert("error");
    }
  };
  const EditHandler = (id) => {
    navigate(`/editUser/${id}`);
  };
  const Card = (props) => {
    return (
      <>
        <tr>
          <th scope="row">{props.id}</th>
          <td>{props.name}</td>
          <td>{props.email}</td>
          <td>
            <button
              className="btn btn-primary mx-2 "
              onClick={() => EditHandler(props.objId)}
            >
              Edit
            </button>
            <button
              className="btn btn-danger  mx-2 "
              onClick={() => DelHandler(props.objId)}
            >
              Del
            </button>
          </td>
        </tr>
      </>
    );
  };
  return (
    <>
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Sno</th>
              <th scope="col">name</th>
              <th scope="col">Email</th>
              <th scope="col">Option</th>
            </tr>
          </thead>
          <tbody>
            {users.map((item, o) => (
              <Card
                key={o}
                objId={item._id}
                id={o + 1}
                name={item.name}
                email={item.email}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllUsers;
