import express from "express";
import { register, login, logout } from "../controllers/userController.js";
import { isAuthentorized } from "../middlewares/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/logout", isAuthentorized, logout);

export default router;
