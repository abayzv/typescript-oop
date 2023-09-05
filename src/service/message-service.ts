import { validate } from "../validation/validation";
import { sendMessageSchema } from "../validation/message-validation";
import { Request } from "express";
import { session } from "../app/session";
import { ErrorResponse } from "../error/error-response";
import SendMessage from "../utils/message";

const sendMessage = async (request: Request) => {
  const result = validate(sendMessageSchema, request);

  const client = session.getClient(result.user_id, result.client_id);

  if (!client) {
    throw new ErrorResponse(404, "Client not found");
  }

  const sendMessage = new SendMessage(
    result.message,
    result.sender,
    client.client
  );

  await sendMessage.sendTextMessage();

  return {
    message: result.message,
  };
};

export default { sendMessage };
