import { Request } from "express";
import { WAClient } from "../utils/wa";
import { validate } from "../validation/validation";
import { sessionSchema, waSchema } from "../validation/wa-validation";
import { logger } from "../app/logging";
import { StatusParams } from "../types/wa";
import Session from "../utils/session";
import { ErrorResponse } from "../error/error-response";

const session = new Session();

const connectToWA = async (request: Request) => {
  const { user_id, client_id } = validate(waSchema, request);

  const client = new WAClient(user_id, client_id);

  session.addClient(client);

  logger.info("Client created", client);

  return {
    user_id: client.user_id,
    client_id: client.client_id,
    qr: client.qr,
    status: client.status,
  };
};

const getStatus = async (request: Request) => {
  const result = validate(waSchema, request.query);
  const { user_id, client_id } = result as StatusParams;

  const client = session.getClient(user_id, client_id);

  if (!client) {
    throw new ErrorResponse(404, "Client not found");
  }

  return {
    user_id: client.user_id,
    client_id: client.client_id,
    qr: client.qr,
    status: client.status,
  };
};

const getClientInfo = async (request: Request) => {
  const result = validate(waSchema, request.query);
  const { user_id, client_id } = result as StatusParams;

  const client = session.getClient(user_id, client_id);

  if (!client) {
    throw new ErrorResponse(404, "Client not found");
  }

  return client.getInfo();
};

const getSession = async (request: Request) => {
  const result = validate(sessionSchema, request.query);
  const { user_id } = result as StatusParams;

  const client = session.client.filter((client) => client.user_id === user_id);

  if (!client) {
    throw new ErrorResponse(404, "Client not found");
  }

  return client.map((client) => {
    return {
      user_id: client.user_id,
      client_id: client.client_id,
      qr: client.qr,
      status: client.status,
    };
  });
};

export default { connectToWA, getStatus, getClientInfo, getSession };
