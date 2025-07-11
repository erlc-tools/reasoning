import { log, token, client } from ".";
import { CommandLog } from "erlc";
import { unix } from "./utils"

let latestcheck = unix() as number;

async function newcmdchecker(logs: CommandLog[]): Promise<CommandLog[]> {
    let results = [] as CommandLog[]
    logs.forEach(log => {
        if (log.Timestamp > latestcheck) {
            results.push(log)
        }
    })
    return results;
}