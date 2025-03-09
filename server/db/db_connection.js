import mongoose from "mongoose";
import { db_name } from "../constants.js";

const uri = process.env.MONGO_URI;

const connectDB = async (req, res) => {
  try {
    await mongoose
      .connect(`${uri}${db_name}`)
      .then(() => {
        console.log("mongodb connected successfully");
      })
      .catch((err) => {
        console.log("error while connecting", err);
      });
  } catch (err) {
    console.log("Error while connecting mongoDB", err);
  }
};

export default connectDB;
