// dashboardPage.ts

class DashboardPage {

  visit = () => {
    return cy.visit("dashboard").wait("@getDashboard");
  }

  getFilterInputName = () => {
    return cy.get('[data-cy="dashboard_filter_username"]');
  }

  submitFilter = () => {
    return cy.get('[data-cy="dashboard_filter_button"]').click({ force: true });
  }

  getResultRows = () => {
    return cy.get('[data-cy="dashboard_result_row"]');
  }
}

export default new DashboardPage();
