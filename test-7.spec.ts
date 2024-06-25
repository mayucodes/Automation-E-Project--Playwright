import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  await page.getByText('Home  Products Cart Signup').click();
  await page.getByRole('link', { name: ' Test Cases' }).click();
  await page.locator('body').click();
  await page.locator('b').click();
});