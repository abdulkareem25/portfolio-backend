import { Router } from "express";
import authMiddleware from "../middlewares/auth.middleware.js";
import validateMiddleware from "../middlewares/validate.middleware.js";
import {
    addSkillValidator,
    updateSkillValidator,
    skillItemIdValidator,
} from "../validators/skill.validator.js";
import {
    addSkillController,
    getSkillsController,
    updateSkillController,
    deleteSkillController,
} from "../controllers/skill.controller.js";

const router = Router();

/**
 * @route POST /api/skills
 * @desc  Add skills to a category (creates category if it doesn't exist)
 * @access Private
 * @body  { category: string, skillsList: [{ name, level }] }
 */
router.post(
    "/",
    authMiddleware,
    addSkillValidator,
    validateMiddleware,
    addSkillController
);

/**
 * @route GET /api/skills
 * @desc  Get all skill categories with their items
 * @access Public
 */
router.get(
    "/",
    getSkillsController
);

/**
 * @route PUT /api/skills/:id
 * @desc  Update a skill item by its _id (inside skillsList)
 * @access Private
 * @params { id } - skill item _id
 * @body   { name?, level? }
 */
router.put(
    "/:id",
    authMiddleware,
    skillItemIdValidator,
    updateSkillValidator,
    validateMiddleware,
    updateSkillController
);

/**
 * @route DELETE /api/skills/:id
 * @desc  Delete a skill item by its _id (inside skillsList)
 * @access Private
 * @params { id } - skill item _id
 */
router.delete(
    "/:id",
    authMiddleware,
    skillItemIdValidator,
    validateMiddleware,
    deleteSkillController
);

export default router;
