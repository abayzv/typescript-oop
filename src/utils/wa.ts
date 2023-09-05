import { Client, LocalAuth, ClientInfo } from "whatsapp-web.js";
import { logger } from "../app/logging";

class WAClient {
  user_id: string;
  client_id: string;
  qr: string;
  status: string;
  client: Client;

  constructor(user_id: string, client_id: string) {
    this.qr = "waiting for connection";
    this.status = "connecting";
    this.user_id = user_id;
    this.client_id = client_id;
    this.client = new Client({
      puppeteer: { headless: true },
      authStrategy: new LocalAuth({ clientId: user_id + "_" + client_id }),
    });

    this.client.on("qr", (qr) => {
      this.qr = qr;
      this.status = "waiting for scan";
      logger.info("QR RECEIVED", qr);
    });

    this.client.on("ready", () => {
      this.qr = "connected";
      this.status = "online";
      logger.info("Client is ready!");
    });

    this.client.on("loading_screen", (percent, message) => {
      logger.info(`Loading: ${percent} : ${message}`);
    });

    this.client.on("message", (msg) => {
      logger.info("MESSAGE RECEIVED", msg);
      msg.reply("Halo");
    });

    this.client.initialize();
  }

  getInfo() {
    return this.client.info;
  }
}

export { WAClient };
