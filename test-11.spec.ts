import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.automationexercise.com/');
  await page.getByText('Home  Products Cart Signup').click();
  await page.getByRole('link', { name: ' Cart' }).click();
  await page.getByRole('heading', { name: 'Subscription' }).click();
  await page.getByPlaceholder('Your email address').click();
  await page.getByPlaceholder('Your email address').fill('jelly@gmail.com');
  await page.getByRole('button', { name: '' }).click();
  await page.getByText('You have been successfully').click();
  //scene 2 
await page.goto('https://automationexercise.com/');
await page.getByRole('link', { name: ' Cart' }).click();
await page.getByPlaceholder('Your email address').click();
await page.getByPlaceholder('Your email address').click();
await page.getByPlaceholder('Your email address').fill('abcd');
await page.getByRole('button', { name: '' }).click();
await page.getByText('You have been successfully subscribed! Subscription Get the most recent updates').click();
//scene 3 
await page.getByPlaceholder('Your email address').click();
await page.getByPlaceholder('Your email address').fill('');
await page.getByPlaceholder('Your email address').click();
await page.getByPlaceholder('Your email address').fill('jelly@gmail.com');
await page.getByRole('button', { name: '' }).click();
await page.getByPlaceholder('Your email address').fill('jelly@gmail.com');
await page.getByRole('button', { name: '' }).click();
await page.getByText('You have been successfully').click();

});