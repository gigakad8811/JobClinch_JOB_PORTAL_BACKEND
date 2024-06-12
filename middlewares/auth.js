import express from "express";
import { config } from "dotenv";
import { User } from "../models/userSchema.js";
import { catchAsyncErrors } from "./catchAsyncError.js";
import ErrorHandler from "./error.js";
import jwt from "jsonwebtoken";
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

export const isAuthorized = catchAsyncErrors(async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return next(new ErrorHandler("User Not Authorized", 401));
  }
  const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

  req.user = await User.findById(decoded.id);

  next();
});
