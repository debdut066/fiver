import express from "express";

const router = express.Router();

router.get("/:id", (req, res) => {
  console.log("get");
});

export default router;
