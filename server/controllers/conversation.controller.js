import createError from "../utils/createError.js";
import Conversation from "../Schema/conversation.Schema.js"
import mongoose from "mongoose";

export const createConversation = async (req, res, next) => {
    const newConversation = new Conversation({
        id : req.isSeller ? req.userId + req.body.to :  req.body.to + req.userId,
        sellerId : req.isSeller ? req.userId : req.body.to,
        buyerId : req.isSeller ? req.body.to : req.userId,
        readBySeller : req.isSeller,
        readByBuyer : !req.isSeller 
    })

    try {
        const savedConversation = await newConversation.save();
        res.status(200).send(savedConversation);
    } catch (error) {
        next(error)
    }
}

export const updateConversation = async (req, res, next) =>{
    try {
        const updateConversation = await Conversation.findOneAndUpdate(
            { id : req.params.id},
            { 
                $set : {
                    ...(req.isSeller ? { readBySeller : true } : { readByBuyer : true }) 
                },
            },
            { new : true }
        );
        res.status(200).send(updateConversation)
    } catch (error) {
        next(error)
    }
}

export const getSingleConversation = async (req, res, next) =>{
    try {
        const conversation = await Conversation.findOne({
            id : req.params.id
        })
        if(!conversation) return next(createError(404,"Not Found!"))
        res.status(200).send(conversation);
    } catch (error) {
        next(error)
    }
}

export const getConversation = async (req, res, next) =>{
    try {
        const conversations = await Conversation.find(
            req.isSeller ? { sellerId : (new mongoose.Types.ObjectId(req.userId)) } : { buyerId : (new mongoose.Types.ObjectId(req.userId)) }
        )
        .sort({ updatedAt : -1 })
        .populate( req.isSeller ? "buyerId" : "sellerId");
        res.status(200).send(conversations);
    } catch (error) {
        next(error)
    }
}

