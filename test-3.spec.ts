import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.automationexercise.com/');
  await page.getByRole('link', { name: ' Signup / Login' }).click();
  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').click();
  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('hsgdjkkoel');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('sdjsou7ndk');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').click();
  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('hsgdjkkoel@gmail.com');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByText('Your email or password is').click();
});