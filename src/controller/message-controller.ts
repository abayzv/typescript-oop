import messageService from "../service/message-service";
import { NextFunction, Request, Response } from "express";

const sendMessage = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await messageService.sendMessage(req.body);
    res.status(200).send({ message: "success", data: result });
  } catch (error) {
    next(error);
  }
};

const sendButtonsMessage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await messageService.sendMessageButtons(req.body);
    res.status(200).send({ message: "success", data: result });
  } catch (error) {
    next(error);
  }
};

const sendMediaMessage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await messageService.sendMediaMessage(req.body);
    res.status(200).send({ message: "success", data: result });
  } catch (error) {
    next(error);
  }
};

export default { sendMessage, sendButtonsMessage, sendMediaMessage };
