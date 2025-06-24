import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  timeout: 30_000,
  retries: process.env.CI ? 2 : 0,
  use: { baseURL: 'http://localhost:3000' },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox',  use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit',   use: { ...devices['Desktop Safari'] } },
    {
      name: 'edge',
      use: {
        channel: 'msedge',
        // reuse Chrome’s viewport/mobile settings
        ...devices['Desktop Chrome'],
      },
    },
  ],
});
