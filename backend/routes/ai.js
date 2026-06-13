import express from "express";
const router = express.Router();

router.post("/generate", (req, res) => {
  res.json({ message: "AI route working" });
});

export default router;
