import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.automationexercise.com/');
  await page.locator('div').filter({ hasText: 'Home  Products Cart Signup' }).nth(2).click();
  await page.locator('.productinfo > .btn').first().click();
  await page.getByRole('button', { name: 'Continue Shopping' }).click();
  await page.locator('div:nth-child(4) > .product-image-wrapper > .single-products > .productinfo > .btn').click();
  await page.getByRole('button', { name: 'Continue Shopping' }).click();
  await page.getByRole('link', { name: ' Cart' }).click();
  await page.getByText('Shopping Cart').click();
  await page.getByText('Proceed To Checkout').click();
  await page.getByRole('link', { name: 'Register / Login' }).click();
  await page.getByPlaceholder('Name').click();
  await page.getByPlaceholder('Name').press('CapsLock');
  await page.getByPlaceholder('Name').fill('J');
  await page.getByPlaceholder('Name').press('CapsLock');
  await page.getByPlaceholder('Name').fill('John ');
  await page.getByPlaceholder('Name').press('CapsLock');
  await page.getByPlaceholder('Name').fill('John B');
  await page.getByPlaceholder('Name').press('CapsLock');
  await page.getByPlaceholder('Name').fill('John Berry');
  await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').click();
  await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill('john@gmail.com');
  await page.getByRole('button', { name: 'Signup' }).click();
  await page.locator('form').filter({ hasText: 'Email Address already exist!' }).getByPlaceholder('Email Address').click();
  await page.locator('form').filter({ hasText: 'Email Address already exist!' }).getByPlaceholder('Email Address').click();
  await page.locator('form').filter({ hasText: 'Email Address already exist!' }).getByPlaceholder('Email Address').click();
  await page.locator('form').filter({ hasText: 'Email Address already exist!' }).getByPlaceholder('Email Address').press('ArrowLeft');
  await page.locator('form').filter({ hasText: 'Email Address already exist!' }).getByPlaceholder('Email Address').press('ArrowLeft');
  await page.locator('form').filter({ hasText: 'Email Address already exist!' }).getByPlaceholder('Email Address').press('ArrowLeft');
  await page.locator('form').filter({ hasText: 'Email Address already exist!' }).getByPlaceholder('Email Address').press('ArrowLeft');
  await page.locator('form').filter({ hasText: 'Email Address already exist!' }).getByPlaceholder('Email Address').press('ArrowLeft');
  await page.locator('form').filter({ hasText: 'Email Address already exist!' }).getByPlaceholder('Email Address').press('ArrowLeft');
  await page.locator('form').filter({ hasText: 'Email Address already exist!' }).getByPlaceholder('Email Address').press('ArrowLeft');
  await page.locator('form').filter({ hasText: 'Email Address already exist!' }).getByPlaceholder('Email Address').press('ArrowLeft');
  await page.locator('form').filter({ hasText: 'Email Address already exist!' }).getByPlaceholder('Email Address').press('ArrowLeft');
  await page.locator('form').filter({ hasText: 'Email Address already exist!' }).getByPlaceholder('Email Address').press('ArrowRight');
  await page.locator('form').filter({ hasText: 'Email Address already exist!' }).getByPlaceholder('Email Address').fill('johnb@gmail.com');
  await page.getByRole('button', { name: 'Signup' }).click();
  await page.getByLabel('Password *').click();
  await page.getByLabel('Password *').fill('johnb');
  await page.getByLabel('Mr.').check();
  await page.locator('#days').selectOption('17');
  await page.locator('#months').selectOption('8');
  await page.locator('#years').selectOption('1995');
  await page.getByLabel('Receive special offers from').check();
  await page.getByLabel('Sign up for our newsletter!').check();
  await page.getByLabel('First name *').click();
  await page.getByLabel('First name *').fill('john');
  await page.getByLabel('Last name *').click();
  await page.getByLabel('Last name *').fill('berry');
  await page.getByLabel('Company', { exact: true }).click();
  await page.getByLabel('Company', { exact: true }).fill('sync');
  await page.getByLabel('Address * (Street address, P.').click();
  await page.getByLabel('Address * (Street address, P.').fill('abc abc ');
  await page.getByLabel('Address 2').click();
  await page.getByLabel('Address 2').fill('abc abc ');
  await page.getByLabel('Country *').selectOption('Australia');
  await page.getByLabel('State *').click();
  await page.getByLabel('State *').fill('wvr state');
  await page.getByLabel('City *').click();
  await page.getByLabel('City *').fill('melbourn');
  await page.locator('#zipcode').click();
  await page.locator('#zipcode').fill('5678');
  await page.getByLabel('Mobile Number *').click();
  await page.getByLabel('Mobile Number *').fill('098253674');
  await page.getByRole('button', { name: 'Create Account' }).click();
  await page.getByText('Account Created!').click();
  await page.getByRole('link', { name: 'Continue' }).click();
  await page.goto('https://www.automationexercise.com/account_created');
  await page.getByRole('link', { name: 'Continue' }).click();
  await page.getByText('Logged in as John Berry').click();
  await page.getByRole('link', { name: ' Cart' }).click();
  await page.getByText('Proceed To Checkout').click();
  await page.getByText('Your delivery address Mr.').click();
  await page.getByText('Your billing address Mr. john').click();
  await page.locator('textarea[name="message"]').click();
  await page.locator('textarea[name="message"]').fill('testing 123');
  await page.getByText('Rs.').nth(1).click();
  await page.getByText('Rs.').nth(3).click();
  await page.getByText('Rs. 900').click();
  await page.getByRole('link', { name: 'Place Order' }).click();
  await page.locator('input[name="name_on_card"]').click();
  await page.locator('input[name="name_on_card"]').fill('12345678');
  await page.locator('input[name="card_number"]').click();
  await page.locator('input[name="card_number"]').press('CapsLock');
  await page.locator('input[name="card_number"]').fill('J');
  await page.locator('input[name="card_number"]').press('CapsLock');
  await page.locator('input[name="card_number"]').fill('John ');
  await page.locator('input[name="card_number"]').press('CapsLock');
  await page.locator('input[name="card_number"]').fill('John B');
  await page.locator('input[name="card_number"]').press('CapsLock');
  await page.locator('input[name="card_number"]').fill('John Berry');
  await page.getByPlaceholder('ex.').click();
  await page.getByPlaceholder('ex.').fill('213');
  await page.getByPlaceholder('MM').click();
  await page.getByPlaceholder('MM').fill('09');
  await page.getByPlaceholder('YYYY').click();
  await page.getByPlaceholder('YYYY').fill('2028');
  await page.getByRole('button', { name: 'Pay and Confirm Order' }).click();
  await page.getByText('Order Placed!').click();
  await page.getByText('Congratulations! Your order').click();
  await page.getByRole('link', { name: ' Delete Account' }).click();
  await page.getByRole('link', { name: 'Continue' }).click();
});