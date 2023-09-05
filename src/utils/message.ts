import { Client, MessageMedia, List, Buttons } from "whatsapp-web.js";

class SendMessage {
  message: string;
  to: string;
  client: Client;

  constructor(message: string, to: string, client: Client) {
    this.to = to;
    this.message = message;
    this.client = client;
  }

  async sendTextMessage() {
    await this.client.sendMessage(this.to, this.message);
  }

  async sendMediaMessage(url: string, caption?: string) {
    const media = await MessageMedia.fromUrl(url);
    media.mimetype = "image/jpeg";
    media.filename = "image.jpeg";

    await this.client.sendMessage(this.to, media, {
      caption: caption,
    });
  }

  async sendListMessage(list: List) {
    await this.client.sendMessage(this.to, list);
  }

  async sendButtonsMessage(buttons: Buttons) {
    await this.client.sendMessage(this.to, buttons);
  }
}

export default SendMessage;
