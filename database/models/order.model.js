import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "user",
      required: true,
    },
    product: {
      type: mongoose.Types.ObjectId,
      ref: "product",
      required: true,
    },
    quantity: {
      type: Number,
      min: 1,
      default: 1,
    },
    coupon: {
      type: mongoose.Types.ObjectId,
      ref: "coupon",
    },
    price: {
      type: Number,
      min: 0,
      required: true,
    },
    priceAfterDiscount: {
      type: Number,
      min: 0,
      required: true,
    },
    paymentType: {
      type: String,
      enum: ["wallet", "credit"],
      default: "wallet",
    },
    status: {
      type: String,
      enum: ["pending", "paid", "canceled", "delivred"],
      default: "pending",
    },

    deliveryItems: [
      {
        type: mongoose.Types.ObjectId,
        ref: "deliveryItem",
      },
    ],
  },
  { timestamps: true }
);

const productModel = mongoose.model("product", schema);

export default productModel;
