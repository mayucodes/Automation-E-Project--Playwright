import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  await page.getByText('Home  Products Cart Signup').click();
  await page.getByRole('link', { name: 'Home' }).click();
  await page.getByRole('heading', { name: 'Subscription' }).click();
  await page.getByPlaceholder('Your email address').click();
  await page.getByPlaceholder('Your email address').fill('she@gmail.com');
  await page.getByRole('button', { name: '' }).click();
  await page.getByText('You have been successfully').click();
  await page.getByPlaceholder('Your email address').click();
  await page.getByPlaceholder('Your email address').fill('asdfghjkl');
  await page.getByRole('button', { name: '' }).click();
  await page.locator('form').click(); // error msg appeared but was not detected by playwrightawait page.getByPlaceholder('Your email address').click();
  await page.getByPlaceholder('Your email address').click();
  await page.getByPlaceholder('Your email address').fill('she@gmail.com');
  await page.getByRole('button', { name: '' }).click();
  await page.getByText('You have been successfully').click(); // resubscribed nothing happened

});