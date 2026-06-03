import asyncHandler from "../utils/asyncHandler.js";
import {
    createMessage,
    getAllMessages,
    getMessageById,
    deleteMessage,
} from "../services/message.service.js";

// POST /api/contacts
export const createMessageController = asyncHandler(async (req, res) => {
    const { name, email, subject, message } = req.body;

    const newMessage = await createMessage(name, email, subject, message);

    return res.status(201).json({
        success: true,
        message: "Message sent successfully",
        data: newMessage,
    });
});

// GET /api/contacts
export const getAllMessagesController = asyncHandler(async (req, res) => {
    const messages = await getAllMessages();

    return res.status(200).json({
        success: true,
        messages,
    });
});

// GET /api/contacts/:id
export const getMessageByIdController = asyncHandler(async (req, res) => {
    const message = await getMessageById(req.params.id);

    if (!message) {
        return res.status(404).json({
            success: false,
            message: "Message not found",
        });
    }

    return res.status(200).json({
        success: true,
        message,
    });
});

// DELETE /api/contacts/:id
export const deleteMessageController = asyncHandler(async (req, res) => {
    const message = await deleteMessage(req.params.id);

    if (!message) {
        return res.status(404).json({
            success: false,
            message: "Message not found",
        });
    }

    return res.status(200).json({
        success: true,
        message: "Message deleted successfully",
    });
});
