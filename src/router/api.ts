import express from "express";
import messageController from "../controller/message-controller";

const router = express.Router();

router.post("/api/send-message", messageController.sendMessage);

export { router };
