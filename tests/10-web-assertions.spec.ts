import { test, expect } from "@playwright/test";

test("Incorrect username error message appears if unknown user 👍", async ({
  page,
}) => {
  await page.goto("https://github.com/login");
  await page
    .getByRole("textbox", { name: "Username or email address" })
    .click();
  await page
    .getByRole("textbox", { name: "Username or email address" })
    .fill("donaldtrump");
  await page.getByRole("textbox", { name: "Password" }).click();
  await page.getByRole("textbox", { name: "Password" }).fill("bbbbb");
  await page.getByRole("button", { name: "Sign in", exact: true }).click();
  await expect(page.getByText(/Incorrect username/)).toBeVisible();
});
