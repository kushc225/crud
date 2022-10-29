import dbConect from "./conn/conn.js";
import express from "express";
import dotenv from "dotenv";
import UserRouter from "./routes/user.js";
import bodyParser from "body-parser";
import cors from "cors";
const URL = process.env.ENDPOINT;
dotenv.config();
const app = express();
dbConect();
app.use(cors());
app.use(express.json());

app.use(`/api`, UserRouter);
app.use(bodyParser.json({ limit: "30mb", extends: true }));
app.use(bodyParser.json({ limit: "30mb", extended: true }));

// app.get("/", (req, res) => {
//   res.status(200).json({ msg: "hii" });
// });

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`listning at port no ${port}`);
});
