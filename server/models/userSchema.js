import mongoose, { Schema } from "mongoose";

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    Required: true
  },
  email: {
    type: String,
    Required: true
  },
  password: {
    type: String,
    Required: true
  },
  categories: [
    {
        type: Map,
        of: [{ type: mongoose.Schema.Types.ObjectId, ref: "Content" }]
    }
]
});

const User = mongoose.model("User", UserSchema);

export default User;
