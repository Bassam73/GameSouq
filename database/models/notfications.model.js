import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "user",
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    type: String,
  },
  { timestamps: true }
);

const notficationsModel = mongoose.model("notfications", schema);

export default notficationsModel;
