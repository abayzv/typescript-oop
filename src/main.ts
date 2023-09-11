import { logger } from "./app/logging";
import { web } from "./app/web";
import fs from "fs";

const SESSION_FILE_PATH = "./session.json";
const port = process.env.APP_PORT || 5000;

let sessionData: any;
if (fs.existsSync(SESSION_FILE_PATH)) {
  sessionData = require(SESSION_FILE_PATH);
}

web.listen(port, () => {
  logger.info(`Server started on port ${port}`);
});
