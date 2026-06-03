import { Router } from "express";
import authMiddleware from "../middlewares/auth.middleware.js";
import validateMiddleware from "../middlewares/validate.middleware.js";
import {
    createMessageValidator,
    messageIdValidator,
} from "../validators/message.validator.js";
import {
    createMessageController,
    getAllMessagesController,
    getMessageByIdController,
    deleteMessageController,
} from "../controllers/contact.controller.js";

const router = Router();

/**
 * @route POST /api/contacts
 * @desc  Send a contact message (from a portfolio visitor)
 * @access Public
 * @body  { name, email, subject?, message }
 */
router.post(
    "/",
    createMessageValidator,
    validateMiddleware,
    createMessageController
);

/**
 * @route GET /api/contacts
 * @desc  Get all messages (inbox)
 * @access Private
 */
router.get(
    "/",
    authMiddleware,
    getAllMessagesController
);

/**
 * @route GET /api/contacts/:id
 * @desc  Get a single message by ID (auto-marks as read)
 * @access Private
 * @params { id }
 */
router.get(
    "/:id",
    authMiddleware,
    messageIdValidator,
    validateMiddleware,
    getMessageByIdController
);

/**
 * @route DELETE /api/contacts/:id
 * @desc  Delete a message by ID
 * @access Private
 * @params { id }
 */
router.delete(
    "/:id",
    authMiddleware,
    messageIdValidator,
    validateMiddleware,
    deleteMessageController
);

export default router;