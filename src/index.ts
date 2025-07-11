import * as erlc from 'erlc';
import * as dotenv from "dotenv";
import { Logger } from "tslog";
import { newcmdchecker } from "./newcmdchecker"

// post imports
export const log = new Logger();
dotenv.config()

const debug_pre = process.env.debug as string;
export var debug = false as boolean; // fuck compiler errors
if (debug_pre == "true") { debug = true } else { debug = false };


log.info(`DEBUG IS ${debug}`)

// vars

export const token = process.env.tkn as string;
if (token == "") {
    log.fatal("No token passed in.");
    process.exit(1);
}

export const client = new erlc.Client({
    globalToken: process.env.ratelimit as string
});
client.config();

async function Task(): Promise<void> {
    // get logs
    let logs = await erlc.getCommandLogs(token).catch(err => {
        log.error("Task error while getting logs.", err)
        logs = undefined; // make the task end
    });
    if (!logs) {
        log.error("Task ended.")
        return
    }

    // send to new cmd checker
    const newcmds = await newcmdchecker(logs);

    // check all the commands (make sure they have logs)

    // alert
};

log.info("Loading interval");
let interval = 15 as number // fallback
if (process.env.interval) {
	try {
		interval = parseInt(process.env.interval) as number
	} catch {
		log.fatal("Could not parse interval. Make sure there is only a number in the entry.")
		process.exit(1);
	};
};
log.info(`Interval is ${interval}`);

log.info("Starting Task Runner");
Task()
setInterval(() => {
  Task().catch(console.error);
}, interval);