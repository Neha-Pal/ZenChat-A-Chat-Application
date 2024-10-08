import Conversation from "../models/cenversation_model.js"
import Message from "../models/message_model.js"

export const sendMessage = async(req, res, next)=>{
    try {
        const {message} = req.body
        const {id: receiverId} = req.params
        const senderId = req.user.id

        let conversation = await Conversation.findOne({
            participants: {$all: [senderId, receiverId]},
        })

        if(!conversation){
            conversation = await Conversation.create({
                participants:[senderId, receiverId],
            })
        }

        const newMesssage = new Message({
            senderId,
            receiverId,
            message
        })

        if(newMesssage){
            conversation.messages.push(newMesssage._id)
        }

        await Promise.all([conversation.save(), newMesssage.save()])

        //socket io functionality

        res.status(201).json(newMesssage)
    } catch (error) {
        next(error)
    }
}

export const getMessage = async(req, res, next)=>{
    try {
        const {id: userToMessage} = req.params;
        const senderId = req.user.id;

        const conversation = await Conversation.findOne({
            participants:{$all: [senderId, userToMessage]},
        }).populate("messages")

        if(!conversation){
            return res.status(200).json([])
        }

        const messages = conversation.messages;

        res.status(200).json(messages);

    } catch (error) {
        next(error)
    }
}