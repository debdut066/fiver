import mongoose from "mongoose"
import createError from "../utils/createError.js"
import Order from "../Schema/order.Schema.js"
import Gig from "../Schema/gig.Schema.js"

export const createOrder = async (req, res, next) => {
    try {

        const gig = await Gig.findById(req.params.gigId);

        const newOrder = new Order({
            _id : new mongoose.Types.ObjectId(),
            gigId : gig._id,
            img : gig.cover,
            title : gig.title,
            buyerId : req.userId,
            sellerId : gig.userId,
            price : gig.price,
            payment_intent : "temporary"
        })

        await newOrder.save();
        res.status(200).send("successful")
        
    } catch (error) {
        next(error)
    }
}

export const getOrders = async (req, res, next) => {
    try {
      let orders = [];
      // const orders = await Order.find({
      //   ...(req.isSeller ? { sellerId: req.userId } : { buyerId: req.userId }),
      //   isCompleted: true,
      // });

      if(req.isSeller){
        orders = await Order.find({
          sellerId : req.userId,
          isCompleted : true
        })
      }else{
        orders = await Order.find({
          buyerId: req.userId,
          isCompleted : true
        })
      }
      res.status(200).send(orders);
    } catch (err) {
      next(err);
    }
};

export const intent = (req, res, next) => {

}

export const confirm = (req, res, next) => {

}
