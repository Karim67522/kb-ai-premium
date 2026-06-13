import express from "express";
const router = express.Router();

router.post("/create", (req, res) => {
  res.json({ message: "Video route working" });
});

export default router;
