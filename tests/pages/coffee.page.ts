// dashboardPage.ts

class CoffeePage {

  visit = () => {
    return cy.visit("https://coffee-cart.app/")
  }

  getCoffees = () => {
    return cy.get(':nth-child(3) > ul > li')
  }

  getCoffeeByType = (type: string) => {
    return cy.get(`:nth-child(3) > ul > li`).contains(type).parent()
  }

  getCheckoutButton = () => {
    return cy.get(`[data-test="checkout"]`)
  }

  getPromo = () => {
    return cy.get(`.promo`)
  }

  getFixture = (data: any) => {
    cy.fixture("coffee.json").then(fixtureData => {
      const finalData = []
      data.forEach(element => {
        finalData.push({ ...fixtureData, ...element })
      });
      cy.intercept("/list.json", finalData);
    })
  }
}

export default new CoffeePage();
