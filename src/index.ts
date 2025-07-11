import * as erlc from 'erlc';
import * as dotenv from "dotenv";
import { Logger } from "tslog";

// post imports
export const log = new Logger();
dotenv.config()

const debug_pre = process.env.debug as string;
export var debug = false as boolean; // fuck compiler errors
if (debug_pre == "true") { debug = true } else { debug = false };


log.info(`DEBUG IS ${debug}`)

// vars

export const token = process.env.tkn as string;

export const client = new erlc.Client({
    globalToken: process.env.ratelimit as string
});
client.config();

async function Task(): Promise<void> {
    // get logs

    // send to new cmd checker

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