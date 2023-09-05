import express from "express";
import messageController from "../controller/message-controller";
import waController from "../controller/wa-controller";

const router = express.Router();

// Wa Routes
router.post("/api/wa/connect", waController.connectToWA);
router.get("/api/wa/status", waController.getStatus);
router.get("/api/wa/client-info", waController.getClientInfo);

// Message Routes
router.post("/api/send-message", messageController.sendMessage);

export { router };
