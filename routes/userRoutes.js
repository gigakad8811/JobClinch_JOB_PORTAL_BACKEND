import express from "express";
import { config } from "dotenv";
import {
  register,
  login,
  logout,
  getUser,
} from "../controllers/userController.js";
import { isAuthorized } from "../middlewares/auth.js";
// Import the cors package
import cors from "cors";

const app = express();
config({ path: "./config/config.env" });

// Apply cors middleware to your express app
app.use(
  cors({
    origin: "https://jobclinch.netlify.app/", // Replace with your frontend application's origin
    optionsSuccessStatus: 200,
    credentials: true, // Allow cookies to be sent in the request
  })
);

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/logout", isAuthorized, logout);
router.get("/getuser", isAuthorized, getUser);

export default router;
