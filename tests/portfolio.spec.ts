import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  // Go to the Automation Testing page
  await page.goto('https://portfolio-kappa-lime-76.vercel.app');
});

test('about me link', async ({ page }) => {
  // Click the get started link.
  await page.getByRole('link', { name: 'ABOUT ME' }).click();

  // Expects page to have a text of I have several years...
  await expect(page.getByText("I have several years of experience with quality testing and I'm now transitioning to front-end development, so I bring a unique perspective to streamline your workflows and create, update, or test your web applications.")).toBeVisible();
});

test('what i offer link', async ({ page }) => {
  // Click the get started link.
  await page.getByRole('link', { name: 'WHAT I OFFER' }).click();

  // Expects page to have a text of Here's a glimpse...
  await expect(page.getByText("Here's a glimpse of what I bring to the table:")).toBeVisible();
});

test('my portfolio link', async ({ page }) => {
  // Click the get started link.
  await page.getByRole('link', { name: 'MY PORTFOLIO' }).first().click();

  // Expects page to have a text of Here's a glimpse...
  await expect(page.getByText("Looking for a WordPress site? I’ve got you covered!")).toBeVisible();
});
