import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const dbConect = () => {
  mongoose
    .connect(process.env.DB_URL)
    .then(() => {
      console.log("Database got connnected");
    })
    .catch((err) => console.log(err.message));
};

export default dbConect;
