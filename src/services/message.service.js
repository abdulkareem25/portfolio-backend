import Message from "../models/Message.model.js";

/**
 * Create a new contact message (from a portfolio visitor).
 */
export const createMessage = async (name, email, subject, message) => {
    const newMessage = await Message.create({ name, email, subject, message });
    return newMessage;
};

/**
 * Get all non-deleted messages, newest first.
 */
export const getAllMessages = async () => {
    const messages = await Message.find({ isDeleted: false }).sort({ createdAt: -1 });
    return messages;
};

/**
 * Get a single message by ID.
 * Also marks it as read on first open.
 */
export const getMessageById = async (id) => {
    const message = await Message.findOne({ _id: id, isDeleted: false });

    if (message && !message.isRead) {
        message.isRead = true;
        await message.save();
    }

    return message; // null if not found
};

/**
 * Soft-delete a message by ID.
 */
export const deleteMessage = async (id) => {
    const message = await Message.findOne({ _id: id, isDeleted: false });

    if (!message) return null;

    message.isDeleted = true;
    await message.save();

    return message;
};
