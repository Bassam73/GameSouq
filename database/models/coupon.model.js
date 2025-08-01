import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    code: {
      type: String,
      minlength: 3,
      required: true,
      trim: true,
    },
    discount: {
      type: Number,
      min: 0,
      max: 100,
      required: true,
    },
    discountType: {
      type: String,
      enum: ["percent", "cash"],
      default: ["percent"],
    },
    expires: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

const couponModel = mongoose.model("coupon", schema);

export default couponModel;
