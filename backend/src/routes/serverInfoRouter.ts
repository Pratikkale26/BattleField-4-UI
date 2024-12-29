import express from "express";
import { getServerInfo } from "../controllers/serverInfoController";

const router = express.Router();

// Endpoint to fetch server info
router.get("/server-info", getServerInfo);

export default router;
