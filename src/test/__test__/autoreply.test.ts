import { logger } from "../../app/logging";
import AutoReply from "../../utils/autoreply";
import { Client, NoAuth } from "whatsapp-web.js";

describe("Autoreply", () => {
  const client = new Client({
    puppeteer: { headless: true },
    authStrategy: new NoAuth(),
  });

  it("should find an autoreply from message ", async () => {
    const message = "halo";
    const to = "6285259622409";

    const autoreply = new AutoReply(message, to, client);

    expect(autoreply.message).toBe("halo");
    expect(autoreply.to).toBe("6285259622409");

    await autoreply.getReply();
    expect(autoreply.reply).toBeDefined();
    expect(autoreply.findReply()).toEqual({
      message: "Halo",
      reply: "Halo juga",
    });
  });

  it("should not find an autoreply from message ", async () => {
    const message = "halo halo";
    const to = "6285259622409";

    const autoreply = new AutoReply(message, to, client);

    await autoreply.getReply();
    expect(autoreply.findReply()).toBeUndefined();
  });
});
