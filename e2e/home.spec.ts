import { test, expect, Page } from '@playwright/test';

test('Homepage loads', async ({ page }: { page: Page }) => {
  await page.goto('http://localhost:3000');
  await expect(page).toHaveTitle(/Galactic Genius/i);
});
