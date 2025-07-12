import { isDebug } from "./debug";
import { logger } from "./logger";

const debug = isDebug()

export function hi(funcName: string) {
    if (debug==true){ logger.debug("FUNCHELLO", `FUNCNAME: ${funcName}`)}
}