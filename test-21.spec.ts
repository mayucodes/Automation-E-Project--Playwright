import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.automationexercise.com/');
  await page.getByRole('link', { name: ' Products' }).click();
  await page.getByRole('heading', { name: 'All Products' }).click();
  await page.locator('div:nth-child(4) > .product-image-wrapper > .choose > .nav > li > a').click();
  await page.getByRole('link', { name: 'Write Your Review' }).click();
  await page.getByPlaceholder('Your Name').click();
  await page.getByPlaceholder('Your Name').press('CapsLock');
  await page.getByPlaceholder('Your Name').fill('R');
  await page.getByPlaceholder('Your Name').press('CapsLock');
  await page.getByPlaceholder('Your Name').fill('Roy');
  await page.getByPlaceholder('Email Address', { exact: true }).click();
  await page.getByPlaceholder('Email Address', { exact: true }).fill('roy123@gmail.com');
  await page.getByPlaceholder('Add Review Here!').click();
  await page.getByPlaceholder('Add Review Here!').press('CapsLock');
  await page.getByPlaceholder('Add Review Here!').fill('T');
  await page.getByPlaceholder('Add Review Here!').press('CapsLock');
  await page.getByPlaceholder('Add Review Here!').fill('Testing 123');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByText('Thank you for your review.').click();
});