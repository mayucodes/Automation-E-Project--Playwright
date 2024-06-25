import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  await page.locator('.productinfo > .btn').first().click();
  await page.getByRole('button', { name: 'Continue Shopping' }).click();
  await page.locator('div:nth-child(6) > .product-image-wrapper > .single-products > .productinfo > .btn').click();
  await page.getByRole('button', { name: 'Continue Shopping' }).click();
  await page.getByRole('link', { name: ' Cart' }).click();
  await page.getByRole('cell', { name: 'Stylish Dress Women > Dress' }).click();
  await page.getByRole('cell', { name: 'Blue Top Women > Tops' }).click();
  await page.getByRole('cell', { name: 'Description' }).click();
  await page.getByRole('cell', { name: 'Item' }).click();
  await page.getByRole('row', { name: 'Product Image Blue Top Women' }).click();
  await page.getByRole('row', { name: 'Product Image Stylish Dress' }).click();
  await page.getByRole('cell', { name: 'Price' }).click();
  await page.getByText('Rs.').first().click();
  await page.getByText('Rs.').nth(2).click();
  await page.getByRole('cell', { name: 'Quantity' }).click();
  await page.getByRole('row', { name: 'Product Image Blue Top Women' }).getByRole('button').click();
  await page.getByRole('row', { name: 'Product Image Stylish Dress' }).getByRole('button').click();
  await page.getByRole('cell', { name: 'Total' }).click();
  await page.getByText('Rs.').nth(1).click();
  await page.getByText('Rs.').nth(3).click();
});