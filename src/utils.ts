import { hi } from "./funchellos";

export function unix(): number {
    hi("unix")
    return Math.floor(Date.now() / 1000);
}