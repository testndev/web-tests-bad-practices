import { test, expect } from "@playwright/test";
import CoffeePage from "./pages/coffee-pw.page";

test.describe.parallel("Promo popup display", () => {

  [3, 6].forEach((x) => {
    test(`A promo popup appears for ${x} Mocha in cart`, async ({ page }) => {
      const coffeePage = await new CoffeePage(page).goto();
      await expect(coffeePage.getPromo()).toBeHidden();
      for (let i = 1; i <= x; i++) {
        await coffeePage.getCoffeeByType("Cafe_Breve").click();
        await expect(coffeePage.getCartLink()).toContainText(`cart (${i})`);
      }
      await expect(coffeePage.getPromo()).toBeVisible();
      await expect(coffeePage.getPromo()).toContainText("Get an extra cup of Mocha for $4.");
    });
  });

  test('The promo popup disappears', async ({ page }) => {
    const coffeePage = await new CoffeePage(page).goto();
    const coffee = coffeePage.getCoffeeByType("Cafe_Breve"); 
    await expect(coffeePage.getPromo()).toBeHidden();
    await coffee.click();
    await coffee.click();
    await expect(coffeePage.getPromo()).toBeHidden();
    await coffee.click();
    await expect(coffeePage.getPromo()).toBeVisible();
    await coffee.click();
    await expect(coffeePage.getPromo()).toBeHidden();
  });

});
