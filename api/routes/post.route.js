import express from "express";

const router = express.Router();

router.get("/test", async (req, res) => {
  res.send("router works");
});

export default router;
