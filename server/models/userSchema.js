import mongoose from "mongoose";

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
  }
});

const User = mongoose.model("User", UserSchema);

export default User;
