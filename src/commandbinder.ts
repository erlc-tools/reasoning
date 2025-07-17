import { CommandLog } from "erlc";
import { isDebug } from "./debug";

type CommandBinding = {
    action: CommandLog,
    reason: CommandLog
}

const debug = isDebug();


export function isReasonCmd(log: CommandLog): boolean {
    if (log.Command.includes(":log reasoning ")) {
        return true;
    }
    return false;
}


export function commandBinder(logs: CommandLog[]): CommandBinding[] {
    // go through each log, and check if its an action cmd or a reason cmd
    let actionCmds = [] as CommandLog[];
    let reasonCmds = [] as CommandLog[];

    logs.forEach(log => {
        if (isReasonCmd(log)==true) {
            reasonCmds.push(log)
        } else {
            actionCmds.push(log)
        }
    })


}