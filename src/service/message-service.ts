import { validate } from "../validation/validation";
import { sendMessageSchema } from "../validation/message-validation";
import { Request } from "express";

const sendMessage = async (request: Request) => {
  const message = validate(sendMessageSchema, request);

  return {};
};

export default { sendMessage };
