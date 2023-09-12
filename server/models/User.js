import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  xp: Number,
  coins: Number,
  role: String,
  clan: String,
});

const User = mongoose.model("User", userSchema);

export default User;