// Example Playwright: bad practice 10 👎
import { test, expect } from "@playwright/test";


  test("Incorrect username error message appears if unknown user", async ({
    context,
    page,
  }) => {
  /*
    const cdpSession = await context.newCDPSession(page);
    await cdpSession.send("Network.emulateNetworkConditions", {
      offline: false,
      downloadThroughput: (1.5 * 1024 * 1024) / 8,
      uploadThroughput: (750 * 1024) / 8,
      latency: 40,
      connectionType: "cellular3g",
    });
  */
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
    await expect(await page.getByText(/Incorrect username/).isVisible()).toBe(
      true
    );
  });
