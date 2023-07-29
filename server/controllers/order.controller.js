import mongoose from "mongoose"
import createError from "../utils/createError.js"
import Order from "../Schema/order.Schema.js"
import Stripe from "stripe"
import Gig from "../Schema/gig.Schema.js"

export const getOrders = async (req, res, next) => {
    try {
      let orders = [];
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

export const intent = async (req, res, next) => {
  const stripe = new Stripe(process.env.STRIPE);

  const gig = await Gig.findById(req.params.id);;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: gig.price * 100,
    currency: "inr",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  const newOrder = new Order({
    _id : new mongoose.Types.ObjectId(),
    gigId : gig._id,
    img : gig.cover,
    title : gig.title,
    buyerId : req.userId,
    sellerId : gig.userId,
    price : gig.price,
    payment_intent : paymentIntent.id
  })

  await newOrder.save();

  res.status(200).send({ 
    clientSecret : paymentIntent.client_secret
  })
}

export const confirm = async (req, res, next) => {
  try {
    await Order.findOneAndUpdate({
      payment_intent : req.body.payment_intent
    },{
      $set : {
        isCompleted : true
      }
    })

    res.status(200).send("Order has been confirmed");
  } catch (error) {
    next(error);
  }
}
