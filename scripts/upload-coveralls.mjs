#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

// Node 18+ has global fetch & FormData
const COVERALLS_TOKEN = process.env.COVERALLS_REPO_TOKEN;
if (!COVERALLS_TOKEN) {
  console.error('❌  Missing COVERALLS_REPO_TOKEN env var');
  process.exit(1);
}

// read your lcov file
const lcovPath = path.resolve(process.cwd(), 'coverage', 'lcov.info');
const lcov = fs.readFileSync(lcovPath, 'utf8');

const form = new FormData();
form.append('repo_token', COVERALLS_TOKEN);
form.append('service_name', 'github-actions');
form.append('lcov', lcov);

(async () => {
  const res = await fetch('https://coveralls.io/api/v1/jobs', {
    method: 'POST',
    body: form,
  });
  if (!res.ok) {
    console.error(`❌  Coveralls upload failed: ${res.statusText}`);
    process.exit(1);
  }
  const json = await res.json();
  console.log('✅  Coveralls upload succeeded:', json);
})().catch(err => {
  console.error('❌  Error uploading to Coveralls:', err);
  process.exit(1);
});
