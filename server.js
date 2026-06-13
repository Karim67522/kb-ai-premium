import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./backend/routes/auth.js";
import billingRoutes from "./backend/routes/billing.js";
import aiRoutes from "./backend/routes/ai.js";
import videoRoutes from "./backend/routes/video.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/auth", authRoutes);
app.use("/billing", billingRoutes);
app.use("/ai", aiRoutes);
app.use("/video", videoRoutes);

app.get("/", (req, res) => {
  res.send("KB AI Backend is running...");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
