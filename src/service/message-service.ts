import { validate } from "../validation/validation";
import {
  sendMediaMessageSchema,
  sendMessageSchema,
} from "../validation/message-validation";
import { Request } from "express";
import { session } from "../app/session";
import { ErrorResponse } from "../error/error-response";
import SendMessage from "../utils/message";
import { Buttons } from "whatsapp-web.js";

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

const sendMessageButtons = async (request: Request) => {
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

  const buttons: Buttons = new Buttons(result.message, [
    {
      id: "1",
      body: "Button 1",
    },
    {
      id: "2",
      body: "Button 2",
    },
  ]);

  await sendMessage.sendButtonsMessage(buttons);

  return {
    message: result.message,
  };
};

const sendMediaMessage = async (request: Request) => {
  const result = validate(sendMediaMessageSchema, request);

  const client = session.getClient(result.user_id, result.client_id);

  if (!client) {
    throw new ErrorResponse(404, "Client not found");
  }

  const sendMessage = new SendMessage(
    result.message,
    result.sender,
    client.client
  );

  await sendMessage.sendMediaMessage(result.media_url, result.message);

  return {
    message: result.message,
  };
};

export default { sendMessage, sendMessageButtons, sendMediaMessage };
