import * as erlc from 'erlc';
import * as dotenv from "dotenv";
import { newcmdchecker } from "./newcmdchecker"
import { isDebug } from './debug';
import { logger } from "./logger"

// post imports
dotenv.config()

const debug = isDebug();


logger.info(`DEBUG IS ${debug}`)

// vars

export const token = process.env.tkn as string;
if (token == "") {
    logger.fatal("No token passed in.");
    process.exit(1);
}

export const client = new erlc.Client({
    globalToken: process.env.ratelimit as string
});
client.config();

async function Task(): Promise<void> {
    if (debug == true) { logger.debug("task running") }
    // get logs
    let logs = await erlc.getCommandLogs(token).catch(err => {
        logger.error("Task error while getting logs.", err)
        logs = undefined; // make the task end
    });
    if (!logs) {
        logger.error("Task ended.")
        return
    }

    // send to new cmd checker
    const newcmds = await newcmdchecker(logs);
    if (debug == true) { logger.debug("newcmds: ", newcmds) }

    // check all the commands (make sure they have logs)

    // alert
};

logger.info("Loading interval");
let interval = 15 as number // fallback
if (process.env.interval) {
	try {
		interval = parseInt(process.env.interval) as number
	} catch {
		logger.fatal("Could not parse interval. Make sure there is only a number in the entry.")
		process.exit(1);
	};
};
logger.info(`Interval is ${interval}`);

logger.info("Starting Task Runner");
Task()
setInterval(() => {
  Task().catch(console.error);
}, interval * 1000);