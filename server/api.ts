// /server/api.ts
import { fromSrc } from "../src"; // Make sure this file exists

export const serverHello = (): string => fromSrc() + " from server";
