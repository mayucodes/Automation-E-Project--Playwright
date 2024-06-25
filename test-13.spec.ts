import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.automationexercise.com/');
  await page.locator('.choose > .nav > li > a').first().click();
  await page.goto('https://www.automationexercise.com/');
  await page.locator('.choose > .nav > li > a').first().click();
  await page.locator('#quantity').click();
  await page.locator('#quantity').click();
  await page.locator('#quantity').click();
  await page.locator('#quantity').fill('4');
  await page.locator('#quantity').click();
  await page.locator('#quantity').dblclick();
  await page.locator('#quantity').click();
  await page.locator('#quantity').click();
  await page.getByRole('button', { name: ' Add to cart' }).click();
  await page.getByRole('link', { name: 'View Cart' }).click();
  await page.getByRole('button', { name: '4' }).click();
});