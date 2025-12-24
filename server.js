import express from "express";
import bookRoutes from "./routes/bookRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
dotenv.config();

const app = express();
app.use(express.json());

app.use("/api/books", bookRoutes);
app.use("/api/auth", authRoutes);

// Connect to MongoDB
connectDB();

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
