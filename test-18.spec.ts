import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.automationexercise.com/');
  await page.getByRole('heading', { name: 'Category' }).click();
  await page.getByRole('heading', { name: ' Women' }).click();
  await page.getByRole('heading', { name: ' Men' }).click();
  await page.getByRole('heading', { name: ' Kids' }).click();
  await page.getByRole('link', { name: ' Women' }).click();
  await page.getByRole('link', { name: 'Dress' }).click();
  await page.getByRole('heading', { name: 'Women - Dress Products' }).click();
  await page.getByRole('link', { name: ' Men' }).click();
  await page.getByRole('link', { name: 'Jeans' }).click();
  await page.getByRole('heading', { name: 'Men - Jeans Products' }).click();
});