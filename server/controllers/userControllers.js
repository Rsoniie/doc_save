import { mongo } from "mongoose";
import User from "../models/userSchema.js";
import bcrypt, { genSalt, hash } from "bcrypt";

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

const Login = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      if (!username || !password) {
        return res
          .status(400)
          .json({ message: "username and password is required" });
      }
    }

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(204).json({ message: "No user found" });
    }

    const user_pass = user.password;

    const match = await bcrypt.compare(password, user_pass);
    console.log(match);
    if (match) {
      return res.status(200).json({ message: "User found successfully", user });
    }

    return res.status(400).json({ message: "Password is incorrect" });
  } catch (error) {
    console.log("Internal server error", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const Signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res
        .status(400)
        .json({ message: "username, password and email is required" });
    }

    const existing_username = await User.findOne({ username });
    if (existing_username) {
      return res.status(400).json({ message: "Username already exists" });
    }

    const existing_email = await User.findOne({ email });
    if (existing_email) {
      return res.status(400).json({ message: "Email already exists" });
    }
    const genSalt = 10;
    const hashed_password = await bcrypt.hash(password, genSalt);

    const newUser = new User({
      username: username,
      email: email,
      password: hashed_password,
    });

    await newUser
      .save()
      .then(() => {
        console.log("user created successfully");
      })
      .catch((err) => {
        console.log("Error in user creation");
      });

    return res.status(201).json({ message: "User created Successfully" });
  } catch (error) {
    console.log("Error while creating user", error);
    return res
      .status(500)
      .json({ message: "Internal server error", error: error });
  }
};

export { checking, Signup, Login };
