import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "user",
      required: true,
    },
    subject: {
      type: String,
      required: true,
      minlength: 10,
    },
    messages: [
      {
        type: String,
        minlength: 20,
        required: true,
      },
    ],
    status: {
      type: String,
      enum: ["active", "solved"],
      default: ["active"],
    },
  },
  { timestamps: true }
);

const ticketModel = mongoose.model("ticket", schema);

export default ticketModel;
