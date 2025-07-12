import { CommandLog } from "erlc";
import { unix } from "./utils";
import { isDebug } from "./debug";
import { Logger } from "tslog";

const debug = isDebug();
let latestcheck = unix() as number;

export async function newcmdchecker(logs: CommandLog[]): Promise<CommandLog[]> {
    let results = [] as CommandLog[]
    logs.forEach(log => {
        if (log.Timestamp > latestcheck) {
            results.push(log)
            if(debug==true){ new Logger().debug("logging this because log.Timestamp > latestcheck. this: ", log)} // please replace this someday
        } else if (log.Timestamp <= latestcheck) {
            if(debug==true){ new Logger().debug(" Not logging this because log.Timestamp <= latestcheck. this: ", log)} // please replace this someday
        }
    })
    latestcheck = unix() as number
    return results;
}