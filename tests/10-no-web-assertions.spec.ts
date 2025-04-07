// Example Playwright: bad practice 10 👎
import { test, expect } from "@playwright/test";

test("Error message appears if unknown user ", async ({ page }) => {
  await page.getByRole("textbox", { name: "Username" }).fill("donaldtrump");
  await page.getByRole("textbox", { name: "Password" }).fill("password");
  await page.getByRole("button", { name: "Sign in", exact: true }).click();
  expect(await page.getByText(/Incorrect/).isVisible()).toBe(true);
});
