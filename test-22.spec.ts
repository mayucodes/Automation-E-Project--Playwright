import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  await page.getByRole('heading', { name: 'recommended items' }).click();
  await page.locator('div:nth-child(2) > div > .product-image-wrapper > .single-products > .productinfo > .btn').first().click();
  await page.getByRole('link', { name: 'View Cart' }).click();
  await page.getByRole('link', { name: 'Stylish Dress' }).click();
  await page.getByText('Stylish Dress Category: Women').click();
});