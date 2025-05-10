// Example Cypress : good practice 👍
import coffeePage from "./pages/coffee-cy.page"

describe("Tests Cypress", () => {

  it("Should calculate total amount", () => {
    coffeePage.visit();
    coffeePage.getCoffeeByType("Mocha").should("contain", "espresso");
    coffeePage.getCheckoutButton().should("contain", "$0.00");
    coffeePage.getCoffeeByType("Mocha").should("contain", "$8.00");
    coffeePage.getCoffeeByType("Mocha").click();
    coffeePage.getCoffeeByType("Mocha").click();
    coffeePage.getCheckoutButton().should("contain", "$16.00");
  });
  
  it("A promo appears after 3 items", () => {
    coffeePage.visit();
    coffeePage.getCoffeeByType("Mocha").should("contain", "espresso");
    coffeePage.getCheckoutButton().should("contain", "$0.00");
    coffeePage.getCoffeeByType("Mocha").should("contain", "$8.00");
    coffeePage.getCoffeeByType("Mocha").click();
    coffeePage.getCoffeeByType("Mocha").click();
    coffeePage.getCoffeeByType("Mocha").click();
    coffeePage.getCheckoutButton().should("contain", "$24.00");
    coffeePage.getPromo().should("be.visible");
    coffeePage.getPromo().should("contain", "Get an extra cup");
  });
})
