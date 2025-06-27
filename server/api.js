// server/api.js
import { fromSrc } from './src/index.js'

/**
 * A simple HTTP‐style handler.
 */
export async function handler() {
  return { status: 'OK', message: 'Server up!' }
}

/**
 * Calls through into src/index.js’s fromSrc so Vitest.spyOn can intercept it.
 */
export function serverHello() {
  return fromSrc() + ' from server'
}
