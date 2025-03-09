import { mongo } from "mongoose";
import User from "../models/userSchema.js";

const checking = async (req, res) => {
  const username = "Rough";
  const newUser = new User({
    username: username,
  });
  await newUser.save();
  res.send(
    "Routes and controllers connected succesfully & Mongo Connection done"
  );
};

export { checking };
