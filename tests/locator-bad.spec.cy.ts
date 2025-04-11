// Example Cypress : bad practice 👎

describe("Tests Cypress", () => {

  it("Select an option, click on the filter button and see the result", () => {
    cy.visit("/dashboard")

    cy.get('#main_panel .filter form #name').type("my_username");
    cy.get('#main_panel .filter form .submit').click();

    cy.get('#result_panel .mat-table .mat-row').should("have.length", 10)
  })

})
