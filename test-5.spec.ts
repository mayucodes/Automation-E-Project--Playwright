import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.automationexercise.com/');
  await page.getByRole('link', { name: ' Signup / Login' }).click();
  await page.getByPlaceholder('Name').click();
  await page.getByPlaceholder('Name').press('CapsLock');
  await page.getByPlaceholder('Name').fill('C');
  await page.getByPlaceholder('Name').press('CapsLock');
  await page.getByPlaceholder('Name').fill('Cats');
  await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').click();
  await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill('marsh@gmail.com');
  await page.getByRole('button', { name: 'Signup' }).click();
  await page.getByText('Email Address already exist!').click();
});