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

const token = process.env.tkn as string;

async function Task(): Promise<void> {
    // get logs

    // send to new cmd checker

    // check all the commands (make sure they have logs)

    // alert
}