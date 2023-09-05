import { Client } from "whatsapp-web.js";
import Reply from "../interfaces/autoreply";
import { logger } from "../app/logging";
import reply from "../app/autoreply";

class AutoReply {
  message: string;
  to: string;
  reply: Reply[];
  client: Client;

  constructor(message: string, to: string, client: Client) {
    logger.info("AutoReply Start");

    this.message = message;
    this.to = to;
    this.client = client;
    this.reply = [];
    this.send();
  }

  async send() {
    await this.getReply();

    const message = this.reply.find(
      (reply) => reply.message.toLowerCase() === this.message.toLowerCase()
    );
    if (message) {
      logger.info(`message found: ${message.reply}`);
      logger.info("sending reply");
      try {
        await this.client.sendMessage(this.to, message.reply);
        logger.info("reply sent");
      } catch (error) {
        logger.error(error);
      }
    } else {
      logger.info("message not found");
    }
  }

  async getReply() {
    logger.info("getting reply");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    this.reply = reply;
  }
}

export default AutoReply;
