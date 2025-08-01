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
  },
  { timestamps: true }
);

const categoryModel = mongoose.model("category", schema);

export default categoryModel;
