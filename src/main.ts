import { logger } from "./app/logging";
import { web } from "./app/web";
import { Client, LegacySessionAuth, LocalAuth, NoAuth } from "whatsapp-web.js";
import fs from "fs";

const SESSION_FILE_PATH = "./session.json";

let sessionData: any;
if (fs.existsSync(SESSION_FILE_PATH)) {
  sessionData = require(SESSION_FILE_PATH);
}

web.listen(3000, () => {
  logger.info("Server started on port 3000");
});
