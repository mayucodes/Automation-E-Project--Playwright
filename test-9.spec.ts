import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  await page.getByText('Home  Products Cart Signup').click();
  await page.getByRole('link', { name: ' Products' }).click();
  await page.getByRole('heading', { name: 'All Products' }).click();
  await page.getByPlaceholder('Search Product').click();
  await page.getByPlaceholder('Search Product').fill('shirt');
  await page.getByRole('button', { name: '' }).click();
  await page.getByRole('heading', { name: 'Searched Products' }).click();
  await page.getByText('Men Tshirt').nth(2).click();
});