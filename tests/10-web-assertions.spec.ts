import { test, expect } from "@playwright/test";
import CoffeePage from "./pages/coffee-pw.page";

test(`Nine coffees should be visible`, async ({ page }) => {
  const coffeePage = await new CoffeePage(page).goto('slow');
  await expect(coffeePage.getCoffees()).toHaveCount(9);
});
