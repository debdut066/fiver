import express from "express";
import { verifyToken } from "../middleware/jwt.js";
import * as GigController from "../controllers/gig.controller.js"

const router = express.Router();

router.post("/", verifyToken, GigController.createGig);
router.delete("/:id", verifyToken, GigController.deleteGig);
router.get("/single/:id", verifyToken, GigController.getGig);
router.get("/", GigController.getGigs);

export default router;
