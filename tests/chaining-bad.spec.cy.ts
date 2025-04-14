// Example Cypress : bad practice 👎

describe("Tests Cypress", () => {

  it("Select an option, click on the filter button and see the result", () => {
    cy.visit("/dashboard")
      .get('[data-cy="dashboard_filter_username"]')
      .type("my_username")
      .get('[data-cy="dashboard_filter_button"]')
      .click()
      .get('[data-cy="dashboard_result_row"]')
      .should("have.length", 10)
  })

})
