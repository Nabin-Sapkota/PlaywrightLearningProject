import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://admin.dev.oneaccord.cc/login');
  await page.locator('input[name="email"]').click();
  await page.locator('input[name="email"]').fill('nabin98452@gmail.com');
  await page.locator('input[name="password"]').click();
  await page.locator('input[name="password"]').fill('Password@123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('img', { name: 'video image' }).click();
});