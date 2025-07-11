import { CommandLog } from "erlc";
import { unix } from "./utils"

let latestcheck = unix() as number;

export async function newcmdchecker(logs: CommandLog[]): Promise<CommandLog[]> {
    let results = [] as CommandLog[]
    logs.forEach(log => {
        if (log.Timestamp > latestcheck) {
            results.push(log)
        }
    })
    return results;
}