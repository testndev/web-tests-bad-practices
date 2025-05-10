import { test, expect } from "@playwright/test";
import CoffeePage from "./pages/coffee-pw.page";

test(`Nine coffees should be visible`, async ({ page }) => {
  const coffeePage = await new CoffeePage(page).goto('slow');
  await page.waitForTimeout(1000); // dirty wait for the page to load
  await expect(await coffeePage.getCoffees().count()).toBe(9);
});
