import express from "express";
import { getusers, createUser } from "../controllers/userController.js";
const router = express.Router();

router.get("/", getusers);
router.post("/", createUser);

export default router;