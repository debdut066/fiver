import mongoose, { mongo } from "mongoose";
import Message from "../Schema/message.Schema.js"
import Conversation from "../Schema/conversation.Schema.js"

export const createMessage = async (req, res, next) => {
    const newMessage = new Message({
        _id : new mongoose.Types.ObjectId(),
        conversationId : req.body.conversationId,
        userId : req.userId,
        desc : req.body.desc
    });
    try {
        const savedMessage = await newMessage.save();
        await Conversation.findOneAndUpdate(
            { id : req.body.conversationId },
            { 
                $set : {
                    readBySeller : req.isSeller,
                    readByBuyer : !req.isSeller,
                    lastMessage : req.body.desc,
                },
            },
            { new : true }
        );

        res.status(201).send(savedMessage);
    } catch (error) {
        console.log(error)
        next(error)
    }
}

export const getMessages = async (req, res, next) => {
    try {
        const messages = await Message.find({ conversationId : req.params.id});
        res.status(200).send(messages);
    } catch (error) {
        console.log(error)
        next(error)
    }
}