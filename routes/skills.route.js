import * as Skill from "../controllers/skill.controller.js"
import authMiddleware from "../middleware/auth.middleware.js";
import { Router } from "express"

const router = Router()

//public route
router.get("/", Skill.getSkills)

//private route
router.post("/", authMiddleware, Skill.addSkill)

router.put("/:id", authMiddleware, Skill.updateSkill)

router.delete("/:id", authMiddleware, Skill.deleteSkill)

export default router;
