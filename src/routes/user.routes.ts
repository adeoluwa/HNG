import express, { Request, Response } from "express";
import { getUserInfo } from "../controllers/user.controller";

const router = express.Router();

router.get("/", getUserInfo);

export default router;