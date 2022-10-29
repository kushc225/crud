import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
});

const UserModal = new mongoose.model("users", userSchema);

export default UserModal;
