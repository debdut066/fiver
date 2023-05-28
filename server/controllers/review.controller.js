import createError from "../utils/createError.js"
import Review from "../Schema/review.Schema.js";
import Gig from "../Schema/gig.Schema.js"

export const createReview = async (req, res, next) => {
    if(req.isSeller){
        return next(createError(403,"Sellers can't create a review"))
    }

    const newReview = new Review({
        userId : req.userId,
        gigId : req.body.gigId,
        star : req.body.star,
        desc : req.body.desc
    })
    
    try {
        const review = await Review.findOne({
            gigId : req.body.gigId,
            userId : req.userId
        })

        if(review){
            next(createError(403,"You have already created a review for this gig!"))
        }

        const savedReview = await newReview.save();

        await Gig.findByIdAndUpdate(req.body.gigId,{
            $inc : { totalStars : req.body.star, starNumber : 1 }
        })

        res.status(200).send(savedReview);

    } catch (error) {
        next(error);
    }
} 

export const getReviews = async (req, res, next) => {
    try{
        const reviews = await Review.find({ gigId : req.params.gigId });
        return res.status(200).send(reviews);
    }catch(error){
        next(error)
    }
}

export const deleteReivew = (req,res, next) => {
    
}