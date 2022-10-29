import express from "express";
import {
  getAllUserList,
  addUser,
  oneUser,
  updateUser,
  deleteUser,
} from "../controller/user-controller.js";
const route = express.Router();

route.get("/", getAllUserList);
route.post("/", addUser);
route.get("/:id", oneUser);
route.put("/:id", updateUser);
route.delete("/:id", deleteUser);

export default route;
