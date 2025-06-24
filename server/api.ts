// /server/api.ts
import { fromSrc } from "../src/index.ts"; // for TS-only builds

export async function handler() {
  return { status: 'OK', message: 'Server up!' };
}

export const serverHello = (): string => fromSrc() + " from server";
