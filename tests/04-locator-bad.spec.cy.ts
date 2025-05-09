// Example Cypress : bad practice 👎

describe("Tests Cypress", () => {

  it("Login is possible", () => {
    cy.visit("https://www.saucedemo.com/")
    cy.get('.login_container .form_group input[placeholder="Username"]').type("standard_user");
    cy.get('.login_container .form_group input[name="password"]').type("secret_sauce");
    cy.get('.login_container input[type="submit"]').click();
    cy.get('#inventory_container').should("be.visible");
  });

  beforeEach(() => {
    cy.intercept('POST', '*', 'success')
  });
})
