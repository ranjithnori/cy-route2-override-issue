// type definitions for Cypress object "cy"
/// <reference types="cypress" />


function mockPerson(id){
    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Expose-Headers': '*',
      'Content-Type': 'application/json',
       'X-Custom-Header': `case-${id}`,
      'Last-Modified': 'Mon, 18 Jul 2016 02:36:04 GMT'
    };

    cy.route2({
      hostname: 'swapi.dev',
      method: 'GET',
      pathname: '/api/people'
    }, {
      fixture: 'example',
      headers
    }).as('getPerson');
}

describe("App", function() {
  it("renders the app", function() {
    mockPerson(1);
    cy.visit("/");
    cy.contains('Person 1').click();
    cy.wait('@getPerson');
    mockPerson(2);
    cy.contains('Person 2').click();
    cy.wait('@getPerson');
  });
});
