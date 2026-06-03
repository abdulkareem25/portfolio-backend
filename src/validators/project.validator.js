import { body, params } from "express-validator";

export const createProjectValidator = [
  body("title")
    .notEmpty()
    .withMessage("Title is required")
    .isLength({ max: 100 })
    .withMessage("Title must be less than 100 characters"),
  body("description")
    .notEmpty()
    .withMessage("Description is required")
    .isLength({ max: 500 })
    .withMessage("Description must be less than 500 characters"),
  body("technologies")
    .isArray({ min: 1, max: 3 })
    .withMessage("Technologies must be an array with 1 to 3 items"),
  body("demoUrl")
    .notEmpty()
    .withMessage("Demo URL is required")
    .isURL()
    .withMessage("Demo URL must be a valid URL"),
  body("githubUrl")
    .notEmpty()
    .withMessage("GitHub URL is required")
    .isURL()
    .withMessage("GitHub URL must be a valid URL"),
];

export const updateProjectValidator = [
  body("title")
    .optional()
    .isLength({ max: 100 })
    .withMessage("Title must be less than 100 characters"),
  body("description")
    .optional()
    .isLength({ max: 500 })
    .withMessage("Description must be less than 500 characters"),
  body("technologies")
    .optional()
    .isArray({ min: 1, max: 3 })
    .withMessage("Technologies must be an array with 1 to 3 items"),
  body("demoUrl")
    .optional()
    .isURL()
    .withMessage("Demo URL must be a valid URL"),
  body("githubUrl")
    .optional()
    .isURL()
    .withMessage("GitHub URL must be a valid URL"),
];

export const projectIdValidator = [
  params("id")
    .notEmpty()
    .withMessage("Project ID is required")
    .isMongoId()
    .withMessage("Project ID must be a valid MongoDB ObjectId"),
];