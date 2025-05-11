import { test, expect } from "@playwright/test";
import CoffeePage from "./pages/coffee-pw.page";

test.describe("Promo popup display  - 👎", () => {

  test('The promo popup appears with 3 items in cart', async () => {
    await addCoffee("Cafe_Breve");
    await addCoffee("Mocha");
    await popupIsHidden();
    await addCoffee("Cappuccino");
    await popupIsVisible();
  });

  test('The promo popup disappears at 4th items in cart', async () => {
    await popupIsVisible();
    await addCoffee("Mocha");
    await popupIsHidden();
  });

  let page: CoffeePage;

  test.beforeAll(async ({ browser }) => {
    page = await new CoffeePage(await browser.newPage()).goto();
  });

  async function addCoffee(coffeeType: string) {
    await page.getCoffee(coffeeType).click();
  }

  async function popupIsVisible() {
    await expect(page.getPromoPopup()).toBeVisible();
  }

  async function popupIsHidden() {
    await expect(page.getPromoPopup()).toBeHidden();
  }

});

test.describe.configure({ mode: "serial" });
