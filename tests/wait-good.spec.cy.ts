// Example Cypress : good practice 👍

describe("Tests Cypress", () => {

  it("Should login and see the dashboard once connected", () => {
    cy.visit("/login")

    cy.get('[data-cy="login_username"]').type("my_username");
    cy.get('[data-cy="login_password"]').type("my_password");
    cy.get('[data-cy="login_submit"]').click();

    cy.get('[data-cy="header"]').should("be.visible");
    cy.wait("@loginRequest");

    cy.get('[data-cy="dashboard"]').should("be.visible");
  })

  it("Should display the alert message for 10 seconds", () => {
    cy.clock(new Date());
    const TIMEOUT_ALERT = 11 * 1000
    cy.visit("/create_user");
    cy.get('[data-cy="create_user_name"]').type("1wrong");
    cy.get('[data-cy="login_submit"]').click();
    cy.get('[data-cy="alert"]').should("not.be.visible");
    cy.get('[data-cy="alert"]').should("contain", "Votre nom d'utilisateur doit commencer par une lettre");

    cy.tick(TIMEOUT_ALERT);

    cy.get('[data-cy="alert"]').should("not.be.visible");
  })
})
