import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    phone: {
      required: true,
      trim: true,
      type: string,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    nationalId: {
      type: String,
      unique: true,
      match: /^(2|3)\d{13}$/,
    },
    password: String,
    role: {
      type: "string",
      enum: ["user", "seller", "admin"],
      default: "user",
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    isBlocked: {
      type: Boolean,
      default: false,
    },
    avatar: String,
  },
  { timestamps: true }
);

const userModel = mongoose.model("user", schema);

export default userModel;
