import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.automationexercise.com/');
  await page.getByText('Home  Products Cart Signup').click();
  await page.locator('.productinfo > .btn').first().click();
  await page.getByRole('button', { name: 'Continue Shopping' }).click();
  await page.getByRole('link', { name: ' Cart' }).click();
  await page.getByText('Shopping Cart').click();
  await page.getByRole('cell', { name: '' }).locator('a').click();
  await page.getByText('Cart is empty!').click();
});