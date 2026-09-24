import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import menuRoutes from "./routes/menuRoutes.js";
import featureRoutes from "./routes/featureRoutes.js";
import testimonialRoutes from "./routes/testimonialRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
// test route
app.get("/", (req, res) => {
  res.json({ message: "Coffee Shop API is running" });
});
app.use("/api/menu", menuRoutes);
app.use("/api/features", featureRoutes);
app.use("/api/testimonials", testimonialRoutes);
app.use("/api/contact", contactRoutes);
// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
