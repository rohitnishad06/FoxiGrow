import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cors from "cors";
import authRouter from "./routes/authRoutes.js";

dotenv.config();

const app = express();

const port = process.env.PORT || 5000;

// global middleware
app.use(express.json());

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api/auth", authRouter);

app.get("/", (req, res) => {
  res.send("FoxiGrow Backend Running 🚀");
});

app.listen(port, () => {
  connectDB();
  console.log(`Server is Running on Port ${port}`);
});