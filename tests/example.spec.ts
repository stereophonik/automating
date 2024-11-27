import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  // Go to the Automation Testing page
  await page.goto('https://automationintesting.online');
});

test('has title', async ({ page }) => {
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Restful-booker-platform demo/);
});

test('book button', async ({ page }) => {
  // Click the get started link.
  let bookButton = page.getByRole('button', { name: 'Book this room' });
  bookButton.scrollIntoViewIfNeeded;
  bookButton.click();

  // Expects page to have a text of November 2024.
  await expect(page.getByText('November 2024')).toBeVisible();
});

test('submit button', async ({ page }) => {
  // Click the get started link.
  let submitButton = page.getByRole('button', { name: 'Submit' });
  submitButton.scrollIntoViewIfNeeded;
  submitButton.click();

  // Expects page to have a text of Phone may not be blank.
  await expect(page.getByText('Phone may not be blank')).toBeVisible();
});
