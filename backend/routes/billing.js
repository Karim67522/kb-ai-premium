import express from "express";
const router = express.Router();

router.post("/subscribe", (req, res) => {
  res.json({ message: "Billing route working" });
});

export default router;
