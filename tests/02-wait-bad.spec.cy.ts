// Example Cypress : bad practice 👎

describe("Tests Cypress", () => {

  it("Should display remote data", () => {
    cy.visit("http://www.uitestingplayground.com/ajax");
    cy.get('#ajaxButton').click();
    cy.wait(15_000)
    cy.get('.bg-success').should("be.visible");
    cy.get('.bg-success').should("contain", "Data loaded with AJAX get request.");
  })

  it("Should display the button after 10 seconds", () => {
    cy.visit("http://www.uitestingplayground.com/autowait"); 
    cy.get('#opstatus').should("contain", "---");
    cy.get('#applyButton10').click();
    cy.wait(11_000);
    cy.get('#opstatus').should("contain", "Target element state restored.");
    cy.get('button#target').should("be.visible");  })
})
