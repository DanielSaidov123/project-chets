import Conversstion from "../models/conversstion.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const receiverId = req.params.id;
    const senderId = req.user._id;

    let conversation = await Conversstion.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conversstion.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) {
      conversation.message.push(newMessage._id);
    }

    await Promise.all([conversation.save(), newMessage.save()]);

    res.status(200).json(newMessage);
  } catch (error) {
    console.log("Error in sendMessage controller: ", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getMessage = async (req, res) => {
  try {
    const receiverId = req.params.id;
    const senderId = req.user._id;

    const conversation = await Conversstion.findOne({
      participants: { $all: [senderId, receiverId] },
    }).populate("message"); 

    if (!conversation) return res.status(200).json([]);
    console.log(conversation)
    const messages = conversation.message;

    res.status(200).json(messages);
  } catch (error) {
    console.log("Error in getMessage: ", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
