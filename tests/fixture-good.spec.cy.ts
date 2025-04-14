// Example Cypress : good practice 👍

import coffeePage from "./pages/coffee.page"

describe("Tests de la liste des cafés disponibles", () => {

  beforeEach(() => {
    cy.intercept("/list.json", { fixture: "list.json" });
  })

  it("Should display the 9 types of coffee on the page", () => {
    coffeePage.getFixture([{}, {}, {}, {}, {}, {}, {}, {}, {}])
    coffeePage.visit();

    coffeePage.getCoffees().should("have.length", 9);
  })

  it("Should display coffee up to 4 contents", () => {
    coffeePage.getFixture([{
      "name": "Mocha", "price": 8, "recipe": [
        { "name": "espresso", "quantity": 30 },
        { "name": "chocolate syrup", "quantity": 20 },
        { "name": "steamed milk", "quantity": 25 },
        { "name": "whipped cream", "quantity": 25 }
      ]
    }])

    coffeePage.visit();

    coffeePage.getCoffeeByType("Mocha").should("contain", "espresso");
    coffeePage.getCoffeeByType("Mocha").should("contain", "chocolate syrup");
    coffeePage.getCoffeeByType("Mocha").should("contain", "steamed milk");
    coffeePage.getCoffeeByType("Mocha").should("contain", "whipped cream");
    coffeePage.getCoffeeByType("Mocha").should("contain", "$8.00");
  })

  it("Should add up the prices of the coffees", () => {
    coffeePage.getFixture([
      { "name": "Coffee1", "price": 5 },
      { "name": "Coffee2", "price": 11 },
      { "name": "Coffee3", "price": 15 }
    ]);

    coffeePage.visit();

    coffeePage.getCoffeeByType("Coffee1").click();
    coffeePage.getCoffeeByType("Coffee2").click();
    coffeePage.getCoffeeByType("Coffee3").click();

    coffeePage.getCheckoutButton().should("contain", 31);
  })

})
