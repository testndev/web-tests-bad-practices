// Example Cypress : good practice 👍

describe("Dashboard page tests", () => {

  it("On dashboard page, select an option, click on the filter button and see the result", () => {
    cy.visit("/dashboard")

    cy.get('[data-cy="dashboard_filter_username"]').type("my_username");
    cy.get('[data-cy="dashboard_filter_button"]').click();

    cy.get('[data-cy="dashboard_result_row"]').should("have.length", 10)
  })

})
