import { test, expect } from "@playwright/test";
import CoffeePage from "./pages/coffee-pw.page";

test.describe.parallel("Promo popup display", () => {

  [3, 6].forEach((x) => {
    test(`A promo popup appears for ${x} items in cart`, async ({ page }) => {
      const coffeePage = await new CoffeePage(page).goto();
      await expect(coffeePage.getPromoPopup()).toBeHidden();
      for (let i = 1; i <= x; i++) {
        await coffeePage.getCoffee("Cafe_Breve").click();
        await expect(coffeePage.getCartLink()).toContainText(`cart (${i})`);
      }
      await expect(coffeePage.getPromoPopup()).toBeVisible();
      await expect(coffeePage.getPromoPopup()).toContainText("Get an extra cup of Mocha for $4.");
    });
  });

  test('The promo popup disappears with 4 items in cart', async ({ page }) => {
    const coffeePage = await new CoffeePage(page).goto();
    const coffee = coffeePage.getCoffee("Cafe_Breve");
    await expect(coffeePage.getPromoPopup()).toBeHidden();
    await coffee.click();
    await coffee.click();
    await expect(coffeePage.getPromoPopup()).toBeHidden();
    await coffee.click();
    await expect(coffeePage.getPromoPopup()).toBeVisible();
    await coffee.click();
    await expect(coffeePage.getPromoPopup()).toBeHidden();
  });

});
