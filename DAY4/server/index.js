import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors({
  origin: "https://week5.day4",
  credentials: true
}));
mongoose
  .connect("mongodb://mongo:27017/testdb")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("Mongo Error:", err));
app.get("/", (req, res) => {
  res.send({ message: "Server is running and Mongo connected!" });
});
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));