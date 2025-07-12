import { CommandLog } from "erlc";
import { unix } from "./utils";
import { isDebug } from "./debug";
import { logger } from "./logger";
import { hi } from "./funchellos"

const debug = isDebug();
let latestcheck = unix() as number;

export async function newcmdchecker(logs: CommandLog[]): Promise<CommandLog[]> {
    hi("newcmdchecker")
    let results = [] as CommandLog[]
    logs.forEach(log => {
        if (log.Timestamp > latestcheck) {
            results.push(log)
            //if(debug==true){ logger.debug("logging this because log.Timestamp > latestcheck. this: ", log)}
        } else if (log.Timestamp <= latestcheck) {
            //if(debug==true){ logger.debug(" Not logging this because log.Timestamp <= latestcheck. this: ", log)}
        }
    })
    latestcheck = unix() as number
    return results;
}