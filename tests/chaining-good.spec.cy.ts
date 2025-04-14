// Example Cypress : bad practice 👍


describe("Test the login", () => {

  it("Should fill the name and password inputs and click on submit", () => {
    cy.visit("https://the-internet.herokuapp.com/login")

    cy.get("#username").type("tomsmith")
    cy.get("#password").type("SuperSecretPassword!")
    cy.get("button[type='submit']").click();

    cy.contains("Secure Area").should("be.visible")
  })
})
