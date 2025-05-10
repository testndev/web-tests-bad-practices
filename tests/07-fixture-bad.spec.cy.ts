// Example Cypress : bad practice 👎
import coffeePage from "./pages/coffee-cy.page"

describe("list of available coffees", () => {

  beforeEach(() => {
    cy.intercept("/list.json", { fixture: "list.json" });
  })

  it("Should display the 9 types of coffee on the page", () => {
    coffeePage.visit();
    coffeePage.getCoffees().should("have.length", 9);
  })

  it("Should display coffee up to 4 contents", () => {
    coffeePage.visit();
    coffeePage.getCoffeeByType("Mocha").should("contain", "espresso");
    coffeePage.getCoffeeByType("Mocha").should("contain", "chocolate syrup");
    coffeePage.getCoffeeByType("Mocha").should("contain", "steamed milk");
    coffeePage.getCoffeeByType("Mocha").should("contain", "whipped cream");
    coffeePage.getCoffeeByType("Mocha").should("contain", "$8.00");
  })
 
  it("Should add up the prices of the coffees", () => {
    coffeePage.visit();
    coffeePage.getCoffeeByType("Mocha").click();
    coffeePage.getCoffeeByType("Americano").click();
    coffeePage.getCoffeeByType("Cafe Latte").click();
    coffeePage.getCheckoutButton().should("contain", "$31.00");
  })

})
