// Example Cypress : good practice 👍
describe("Tests Cypress ", () => {

  it("Should display remote data", () => {
    cy.visit("http://www.uitestingplayground.com/ajax");
    cy.intercept('*ajaxdata*').as('ajaxdata')
    cy.get('#ajaxButton').click();
    cy.wait("@ajaxdata");
    cy.get('.bg-success').should("be.visible");
    cy.get('.bg-success').should("contain", "Data loaded with AJAX get request.");
  });

  it("Should display the button after 10 seconds", () => {
    cy.clock(new Date());
    const TIMEOUT_ALERT = 13 * 1000;
    cy.visit("http://www.uitestingplayground.com/autowait");
    cy.get('#opstatus').should("contain", "---");
    cy.get('#applyButton10').click();
    cy.tick(TIMEOUT_ALERT);
    cy.get('#opstatus').should("contain", "Target element state restored.");
    cy.get('button#target').should("be.visible");
  })
})
