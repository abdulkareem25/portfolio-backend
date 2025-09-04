import * as Auth from "../controllers/auth.controller.js"
import { Router } from "express"

const router = Router()

router.post("/register", Auth.register);

router.post("/login", Auth.login);

export default router;