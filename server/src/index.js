// server/src/index.js

// Re-export the workspace root’s fromSrc so tests can spy on it.
// Note the “.js” extension matches Node’s ESM resolution under “node16” or “nodenext”.
export { fromSrc } from '../../src/index.js'
