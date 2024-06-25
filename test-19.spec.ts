import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.automationexercise.com/');
  await page.getByRole('link', { name: ' Products' }).click();
  await page.getByRole('heading', { name: 'Brands' }).click();
  await page.locator('.brands-name').click();
  await page.getByRole('link', { name: '(3) Mast & Harbour' }).click();
  await page.getByRole('heading', { name: 'Brand - Mast & Harbour' }).click();
  await page.getByText('Products Mast & Harbour Category Women Dress Tops Saree Men Tshirts Jeans Kids').click();
  await page.getByRole('link', { name: '(5) H&M' }).click();
  await page.getByRole('heading', { name: 'Brand - H&M Products' }).click();
  await page.getByText('Brand - H&M Products  Added').click();
});