import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Types.ObjectId,
      ref: "product",
    },
    type: {
      type: String,
      enum: ["code", "account"],
    },
    username: String,
    email: String,
    password: String,
    emailPassword: String,
    code: String,
    delivredInOrder: {
      type: mongoose.Types.ObjectId,
      ref: "order",
    },
    description: {
      type: String,
      minlength: 10,
      required: true,
    },
    used: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const deliveryItemModel = mongoose.model("deliveryItem", schema);

export default deliveryItemModel;
