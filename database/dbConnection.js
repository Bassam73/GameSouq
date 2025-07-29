import mongoose from "mongoose";
import AppError from "../src/util/AppError.js";

function dbConnection() {
  mongoose
    .connect(process.env.DB_URL)
    .then(() => {
      console.log("Database is online");
    })
    .catch((err) => {
      throw new AppError(err.message, 500);
    });
}
