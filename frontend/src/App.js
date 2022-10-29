import React from "react";
import Navbar from "./components/Navbar";
import AddUser from "./components/AddUser";
import AllUsers from "./components/AllUsers";
import Home from "./components/Home";
import EditUser from "./components/EditUser";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adduser" element={<AddUser />} />
        <Route path="/allusers" element={<AllUsers />} />
        <Route path="/editUser/:id" element={<EditUser />} />
      </Routes>
    </>
  );
};

export default App;
