// Example Cypress : bad practice 👎

describe("Tests Cypress", () => {

  it("Should login and see the dashboard once connected", () => {
    cy.visit("/login")

    cy.get('[data-cy="login_username"]').input("my_username");
    cy.get('[data-cy="login_password"]').input("my_password");
    cy.get('[data-cy="login_submit"]').click();
    cy.wait(2000)

    cy.get('[data-cy="dashboard"]').should("be.visible")
  })

  it("Should display the alert message for 10 seconds", () => {
    cy.visit("/create_user")

    cy.get('[data-cy="create_user_name"]').input("1wrong");
    cy.get('[data-cy="login_submit"]').click();
    cy.get('[data-cy="alert"]').should("not.be.visible")
    cy.get('[data-cy="alert"]').should("contain", "Votre nom d'utilisateur doit commencer par une lettre")
    cy.wait(10000)

    cy.get('[data-cy="alert"]').should("not.be.visible")
  })
})
