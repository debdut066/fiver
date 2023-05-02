import express from "express"
import { verifyToken } from "../middleware/jwt.js"
const router = express.Router();
import {
    createReview,
    getReviews,
    deleteReivew
} from "../controllers/review.controller.js"

router.post('/', verifyToken, createReview);
router.get('/:id', getReviews);
router.delete('/:id',verifyToken, deleteReivew);

export default router;