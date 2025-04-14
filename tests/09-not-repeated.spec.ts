import { expect, test } from "@playwright/test";
test.beforeEach(async ({ page }) => {
  await page.goto("https://github.com/login");
  await page.route(/.*stats.*/, (route) => {
    route.fulfill({ body: "", headers: {} });
  });
});

test('Github "Sign in" title is visible', async ({ page }) => {
  await expect(page.getByText("Sign in to GitHub")).toBeVisible();
});

test("User name input field is visible and empty", async ({ page }) => {
  const input = page.getByRole("textbox", { name: /Username/ });
  await expect(input).toBeVisible();
  await expect(input).toHaveValue("");
});
