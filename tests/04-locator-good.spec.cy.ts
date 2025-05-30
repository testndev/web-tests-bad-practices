// Example Cypress : good practice 👍

describe("Tests Cypress", () => {

  it("Login is possible", () => {
    cy.visit("https://www.saucedemo.com/")
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();
    cy.get('#inventory_container').should("be.visible");
  });

  beforeEach(() => {
    cy.intercept('POST', '*', 'success')
  });
})
