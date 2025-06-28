// src/index.ts

/**
 * Simple source‐workspace greeting.
 */
export function fromSrc(): string {
  return '👋 Hello from the src workspace!';
}

/**
 * Return a personalized greeting.
 * @param name The name to greet (defaults to "World")
 */
export function getGreeting(name = 'World'): string {
  return `Hello, ${name}!`;
}

/** Return the current ISO timestamp. */
export function getTimestamp(): string {
  return new Date().toISOString();
}

/**
 * Combine timestamp + source greeting.
 * e.g. "[2025-06-28T12:34:56.789Z] 👋 Hello from the src workspace!"
 */
export function getFullLogLine(): string {
  return `[${getTimestamp()}] ${fromSrc()}`;
}

export default {
  fromSrc,
  getGreeting,
  getTimestamp,
  getFullLogLine
};
