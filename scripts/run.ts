// scripts/run.ts
import { fromSrc, getFullLogLine } from '../src/index.js'

/**
 * Entry point for the NGU script.
 * Prints a simple greeting and a full log line.
 */
async function main(): Promise<void> {
  // 1) Base greeting from the core workspace
  console.log(fromSrc())

  // 2) Full log line (timestamp + greeting)
  console.log(getFullLogLine())
}

main().catch(err => {
  console.error('Error running NGU script:', err)
  process.exit(1)
})
