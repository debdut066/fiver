import express from "express"
import { verifyToken } from "../middleware/jwt.js"
const router = express.Router();
import {
    createReview,
    getReviews,
    deleteReivew
} from "../controllers/review.controller.js"

router.post('/', verifyToken, createReview);
router.get('/:gigId', getReviews);
router.delete('/:id',verifyToken, deleteReivew);

export default router;