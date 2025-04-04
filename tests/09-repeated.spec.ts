// Example Playwright: bad practice 9
import { expect, test } from "@playwright/test";

test('Github "Sign in" title is visible', async ({ page }) => {
  await page.goto("https://github.com/login");
  await page.route(/.*stats.*/, (route) => {
    const headers = route.request().headers();
    headers["Access-Control-Allow-Origin"] = "*";
    route.continue({ headers });
  });
  await expect(page.getByText("Sign in to GitHub")).toBeVisible();
});

test("User name input field is visible and empty", async ({ page }) => {
  await page.goto("https://github.com/login");
  await page.route(/.*stats.*/, (route) => {
    const headers = route.request().headers();
    headers["Access-Control-Allow-Origin"] = "*";
    route.continue({ headers });
  });
  await expect(page.getByText("Sign in to GitHub")).toBeVisible();
  const input = page.getByRole("textbox", { name: /Username/ });
  await expect(input).toBeVisible();
  await expect(input).toHaveValue("");
});
