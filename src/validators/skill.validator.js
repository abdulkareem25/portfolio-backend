import { body, param } from "express-validator";

export const addSkillValidator = [
    body("category")
        .notEmpty()
        .withMessage("Category is required")
        .isLength({ max: 50 })
        .withMessage("Category must be less than 50 characters"),
    body("skillsList")
        .isArray({ min: 1 })
        .withMessage("skillsList must be a non-empty array"),
    body("skillsList.*.name")
        .notEmpty()
        .withMessage("Each skill must have a name")
        .isLength({ max: 50 })
        .withMessage("Skill name must be less than 50 characters"),
    body("skillsList.*.level")
        .notEmpty()
        .withMessage("Each skill must have a level")
        .isInt({ min: 1, max: 100 })
        .withMessage("Skill level must be a number between 1 and 100"),
];

export const updateSkillValidator = [
    body("name")
        .optional()
        .isLength({ max: 50 })
        .withMessage("Skill name must be less than 50 characters"),
    body("level")
        .optional()
        .isInt({ min: 1, max: 100 })
        .withMessage("Skill level must be a number between 1 and 100"),
];

export const skillItemIdValidator = [
    param("id")
        .notEmpty()
        .withMessage("Skill item ID is required")
        .isMongoId()
        .withMessage("Skill item ID must be a valid MongoDB ObjectId"),
];
