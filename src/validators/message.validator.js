import { body, param } from "express-validator";

export const createMessageValidator = [
    body("name")
        .notEmpty()
        .withMessage("Name is required")
        .isLength({ max: 100 })
        .withMessage("Name must be less than 100 characters"),
    body("email")
        .notEmpty()
        .withMessage("Email is required")
        .isEmail()
        .withMessage("Email must be a valid email address"),
    body("subject")
        .optional()
        .isLength({ max: 150 })
        .withMessage("Subject must be less than 150 characters"),
    body("message")
        .notEmpty()
        .withMessage("Message is required")
        .isLength({ min: 10, max: 2000 })
        .withMessage("Message must be between 10 and 2000 characters"),
];

export const messageIdValidator = [
    param("id")
        .notEmpty()
        .withMessage("Message ID is required")
        .isMongoId()
        .withMessage("Message ID must be a valid MongoDB ObjectId"),
];
