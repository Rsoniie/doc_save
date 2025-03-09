import mongoose from 'mongoose'
import { db_name } from '../constants.js';

const uri = process.env.MONGO_URI;

const connectDB = async() => {
    const connection = await mongoose.connect(`${uri}/${db_name}`);
    console.log("MongoDB Connected successfully");
}

export default connectDB;