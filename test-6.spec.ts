import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.automationexercise.com/');
  await page.getByRole('link', { name: ' Contact us' }).click();
  await page.getByRole('heading', { name: 'Get In Touch' }).click();
  await page.getByPlaceholder('Name').click();
  await page.getByPlaceholder('Name').press('CapsLock');
  await page.getByPlaceholder('Name').fill('B');
  await page.getByPlaceholder('Name').press('CapsLock');
  await page.getByPlaceholder('Name').fill('Boat');
  await page.getByPlaceholder('Email', { exact: true }).click();
  await page.getByPlaceholder('Email', { exact: true }).fill('boat@gmail.com');
  await page.getByPlaceholder('Subject').click();
  await page.getByPlaceholder('Subject').press('CapsLock');
  await page.getByPlaceholder('Subject').fill('T');
  await page.getByPlaceholder('Subject').press('CapsLock');
  await page.getByPlaceholder('Subject').fill('Testing 123');
  await page.getByPlaceholder('Your Message Here').click();
  await page.getByPlaceholder('Your Message Here').fill('abcd 123 abcd 123 acdb');
  await page.locator('input[name="upload_file"]').click();
  await page.locator('input[name="upload_file"]').setInputFiles('intro.docx');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.locator('#contact-page').getByText('Success! Your details have').click();
  await page.getByRole('link', { name: ' Home' }).click();
  await page.getByRole('link', { name: 'Website for automation' }).click();
});