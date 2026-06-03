import { Router } from "express";
import authMiddleware from "../middlewares/auth.middleware.js";
import validateMiddleware from "../middlewares/validate.middleware.js";
import upload from "../middlewares/upload.middleware.js";
import {
    createProjectValidator,
    updateProjectValidator,
    projectIdValidator
} from "../validators/project.validator.js";
import {
    createProjectController,
    getProjectsController,
    getProjectByIdController,
    updateProjectController,
    deleteProjectController
} from "../controllers/project.controller.js"

const router = Router()

/**
 * @route POST /api/projects
 * @desc Create a new project
 * @access Private
 * @file { image: file }
 * @body { title, description, technologies, demoUrl, githubUrl }
 * @returns { project }
 */

router.post(
    "/",
    authMiddleware,
    upload.single("image"),
    createProjectValidator,
    validateMiddleware,
    createProjectController
)

/**
 * @route GET /api/projects
 * @desc Get all projects
 * @access Public
 * @returns { projects }
 */

router.get(
    "/",
    getProjectsController
)

/**
 * @route GET /api/projects/:id
 * @desc Get a project by ID
 * @access Public
 * @params { id }
 * @returns { project }
 */

router.get(
    "/:id",
    projectIdValidator,
    validateMiddleware,
    getProjectByIdController
)

/**
 * @route PUT /api/projects/:id
 * @desc Update a project by ID
 * @access Private
 * @params { id }
 * @body { title, description, image, technologies, demoUrl, githubUrl }
 * @returns { project }
 */

router.put(
    "/:id",
    authMiddleware,
    upload.single("image"),
    projectIdValidator,
    updateProjectValidator,
    validateMiddleware,
    updateProjectController
)

/**
 * @route DELETE /api/projects/:id
 * @desc Delete a project by ID
 * @access Private
 * @params { id }
 * @returns { message }
 */

router.delete(
    "/:id",
    authMiddleware,
    projectIdValidator,
    validateMiddleware,
    deleteProjectController
)

export default router;