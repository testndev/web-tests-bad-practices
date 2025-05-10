import { Page, Locator } from "@playwright/test";

type AppModeType = 'slow' | 'normal' | 'breakable';

export default class CoffeePage {
  constructor(public page: Page) { }

  baseUrl = "https://coffee-cart.app/";


  async goto(mode: AppModeType = 'normal'): Promise<CoffeePage> {
    let url = this.baseUrl;
    switch (mode) {
      case 'slow':
        url += '?ad=1';
        break;
      case 'breakable':
        url += '?ad=1&breakable=1';
        break;
    }
    await this.page.goto(url);
    return this;
  }

  getCoffees = (): Locator => {
    return this.page.locator(':nth-child(3) > ul > li');
  }

  getCoffeeByType = (coffeeTypeCode: string): Locator => {
    return this.page.locator(`[data-test="${coffeeTypeCode}"]`)
  }

  getCartLink = (): Locator => {
    return this.page.locator(`[aria-label="Cart page"]`);
  }

  getCheckoutButton = (): Locator => {
    return this.page.locator(`[data-test="checkout"]`);
  }

  getPromo = (): Locator => {
    return this.page.locator(`.promo`);
  }

}
