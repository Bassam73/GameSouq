import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      minlength: 2,
      maxlength: 15,
      required: true,
      trim: true,
    },
    slug: String,
    logo: String,
  },
  { timestamps: true }
);

const gameModel = mongoose.model("game", schema);

export default gameModel;
