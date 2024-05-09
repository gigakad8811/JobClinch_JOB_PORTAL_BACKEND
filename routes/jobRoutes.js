import express from "express";
import { getAllJobs } from "../controllers/jobController.js";

const router = express.Router();

router.get("/getall", getAllJobs);

export default router;
