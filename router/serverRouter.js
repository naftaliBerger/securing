import express from "express";
import { getusers, createUser,findUserByUsername } from "../controllers/userController.js";
const router = express.Router();

router.get("/getallusers", getusers);
router.post("/signup", createUser);
router.post("/verify", findUserByUsername);

export default router;