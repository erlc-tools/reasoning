import { isDebug } from "./debug";
import { logger } from "./logger";

try {
    var debug = isDebug()
} catch {
    logger.warn("isDebug failed. Auto setting to true.")
    debug = true
}

export function hi(funcName: string) {
    if (debug==true){ logger.debug("FUNCHELLO", `FUNCNAME: ${funcName}`)}
}