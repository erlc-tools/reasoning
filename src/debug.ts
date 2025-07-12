import { hi } from "./funchellos"
var _cache: null | boolean = null

export function isDebug(): boolean {
    hi("isDebug")
    if (_cache != null) {
        return _cache
    }
    const debug_pre = process.env.debug as string;
    var debug = false as boolean;
    if (debug_pre == "true") { debug = true } else { debug = false };
    _cache = debug
    return debug
}