import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./config/connectDB.js";
import dotenv from "dotenv";
dotenv.config();
// ROUTES
import authRoutes from"./routes/authRoutes.js";

// .env file load karo

const app = express();

// -----------------------------------------------
// MIDDLEWARE
// -----------------------------------------------
app.use(cors());                          // React Native se request aane dena
app.use(express.json());                  // JSON body parse karna
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// -----------------------------------------------
// -----------------------------------------------

app.use("/api/auth",      authRoutes);

// Root check
app.get("/", (req, res) => {
  res.json({ message: "Hammer & Tongues API chal rahi hai ✅" });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route nahi mili" });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error("Server Error:", err.message);
  res.status(500).json({ success: false, message: "Server error", error: err.message });
});

// -----------------------------------------------
// DATABASE + SERVER START
// -----------------------------------------------
const PORT     = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGODB_URI;

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected successfully");
    app.listen(PORT, () => {
      console.log(`✅ Server running on: http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection fail:", err.message);
    process.exit(1);
  });


