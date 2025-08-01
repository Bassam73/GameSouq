import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      minlength: 2,
      required: true,
    },
    description: {
      type: String,
      minlength: 10,
      required: true,
    },
    price: {
      type: Number,
      min: 0,
      required: true,
    },
    quantity: {
      type: Number,
      min: 0,
      default: 0,
      required: true,
    },
    sold: {
      type: Number,
      min: 0,
      default: 0,
      required: true,
    },
    game: {
      type: mongoose.Types.ObjectId,
      ref: "game",
      required: true,
    },
    category: {
      type: mongoose.Types.ObjectId,
      ref: "category",
      required: true,
    },
    seller: {
      type: mongoose.Types.ObjectId,
      ref: "user",
      required: true,
    },
    deliveryType: {
      type: String,
      enum: ["instant", "manual"],
      required: true,
    },
    contentType: {
      type: String,
      enum: ["code", "account"],
    },
  },
  { timestamps: true }
);

const productModel = mongoose.model("product", schema);

export default productModel;
