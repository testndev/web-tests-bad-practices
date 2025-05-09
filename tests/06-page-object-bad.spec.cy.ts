// Example Cypress : bad practice 👎

describe("Tests Cypress", () => {

  it("Should calculate total amount", () => {
    cy.visit("https://coffee-cart.app/");
    cy.get(`:nth-child(3) > ul > li`).contains("Cappuccino").parent().should("contain", "milk foam");
    cy.get(`:nth-child(3) > ul > li`).contains("Cappuccino").parent().should("contain", "espresso");
    cy.get(`[data-test="checkout"]`).should("contain", "$0.00");
    cy.get(`:nth-child(3) > ul > li`).contains("Cappuccino").parent().should("contain", "$19.00");
    cy.get(`:nth-child(3) > ul > li`).contains("Cappuccino").parent().click();
    cy.get(`:nth-child(3) > ul > li`).contains("Cappuccino").parent().click();
    cy.get(`[data-test="checkout"]`).should("contain", "$38.00");
  })

  it("A promo appears after 3 items", () => {
    cy.visit("https://coffee-cart.app/");
    cy.get(`:nth-child(3) > ul > li`).contains("Mocha").parent().should("contain", "espresso");
    cy.get(`[data-test="checkout"]`).should("contain", "$0.00");
    cy.get(`:nth-child(3) > ul > li`).contains("Mocha").parent().should("contain", "$8.00");
    cy.get(`:nth-child(3) > ul > li`).contains("Mocha").parent().click();
    cy.get(`:nth-child(3) > ul > li`).contains("Mocha").parent().click();
    cy.get(`:nth-child(3) > ul > li`).contains("Mocha").parent().click();
    cy.get(`[data-test="checkout"]`).should("contain", "$24.00");
    cy.get(`.promo`).should("be.visible");
    cy.get(`.promo`).should("contain", "Get an extra cup");
  })
})
