import express from "express";
import messageController from "../controller/message-controller";
import waController from "../controller/wa-controller";

const router = express.Router();

// Wa Routes
router.post("/api/wa/connect", waController.connectToWA);
router.get("/api/wa/status", waController.getStatus);
router.get("/api/wa/client-info", waController.getClientInfo);
router.get("/api/wa/session", waController.getSession);

// Message Routes
router.post("/api/send-message", messageController.sendMessage);
router.post("/api/send-buttons-message", messageController.sendButtonsMessage);
router.post("/api/send-media", messageController.sendMediaMessage);

export { router };
