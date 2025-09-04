import { Router } from "express";
import * as Project from "../controllers/project.controller.js"
import authMiddleware from "../middleware/auth.middleware.js";

const router = Router()

//public route
router.get("/", Project.getProjects)


//private route
router.post("/", authMiddleware, Project.createProject)

router.put("/:id", authMiddleware, Project.updateProject)

router.delete("/:id",authMiddleware, Project.deleteProject)

export default router;