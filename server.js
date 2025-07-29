process.on("uncaughtException", (err) => {
  console.log("err", err);
}); // Catch sync errors
import express from "express";
import bootstrap from "./src/module/index.routes.js";
import dbConnection from "./database/dbConnection.js";
import dotenv from "dotenv";
dotenv.config();
let app = express();
const port = process.env.PORT || 3000;
dbConnection();
app.use(express.json());
bootstrap(app);
app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  res.statusCode(err.statusCode).json({ error: err.message, stack: err.stack });
});
app.listen(port, () => {
  console.log("Server is running");
});

process.on("unhandledRejection", (err) => {
  console.log("error", err);
});
