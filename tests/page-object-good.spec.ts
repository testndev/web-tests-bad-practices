// Example Cypress : good practice 👍
import dashboardPage from "./pages/dashboardPage.ts"

describe("Tests Cypress", () => {

  it("Select an option, click on the filter button and see the result", () => {
    dashboardPage.visit();

    dashboardPage.getFilterInputName().input("my_username");
    dashboardPage.submitFilter();

    dashboardPage.getResultRows().should("have.length", 10)
  })

  it("No result expected from back", () => {
    dashboardPage.visit();

    dashboardPage.getFilterInputName().input("my_username");
    dashboardPage.submitFilter();

    dashboardPage.getResultRows().should("have.length", 0)
  })
})
