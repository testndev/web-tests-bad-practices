// Example Playwright: bad practice 1
import { expect, test } from "@playwright/test";

test("Sign in to GitHub - available from main page 👍", async ({ page }) => {
  await page.goto("https://github.com");
  const signInButton = page.getByRole('link', { name: 'Sign in' });
  await expect(signInButton).toBeVisible();
  await signInButton.click();
  await expect(page).toHaveURL(/.*login/);
});
