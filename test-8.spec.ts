import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  await page.getByRole('link', { name: 'Website for automation' }).click();
  await page.getByRole('link', { name: ' Products' }).click();
  await page.locator('.choose > .nav > li > a').first().click();
  await page.locator('div').filter({ hasText: 'Home  Products Cart Signup' }).nth(2).click();
  await page.getByRole('heading', { name: 'Blue Top' }).click();
  await page.getByText('Category: Women > Tops').click();
  await page.getByText('Rs.').click();
  await page.getByText('Quantity:').click();
  await page.getByText('Condition: New').click();
  await page.getByText('Availability: In Stock').click();
  await page.getByText('Brand: Polo').click();await page.goto('https://automationexercise.com/');
  await page.getByRole('link', { name: ' Products' }).click();
  await page.getByPlaceholder('Search Product').click();
  await page.getByPlaceholder('Search Product').fill('underwear');
  await page.getByRole('button', { name: '' }).click();
  await page.getByRole('heading', { name: 'Searched Products' }).click(); 
  // empty page wihout any message indicating that no products were found
  
});