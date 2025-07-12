export function isDebug(): boolean {
    const debug_pre = process.env.debug as string;
    var debug = false as boolean;
    if (debug_pre == "true") { debug = true } else { debug = false };
    return debug
}