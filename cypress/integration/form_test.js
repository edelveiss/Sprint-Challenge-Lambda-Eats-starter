describe("Testing our customer form", function () {
  beforeEach(function () {
    cy.visit("http://localhost:3000/pizza");
  });
  it("Add test to inputs and submit form", function () {
    cy.get("#size")
      .select("Medium Pizza: 12 inches with 8 slices $8.99")
      .should("have.value", "2");

    cy.get("#pepperoni").check().should("be.checked");
    cy.get("#canadian").check().should("be.checked");
    cy.get("#italian").check().should("be.checked");
    cy.get("#tomato").check().should("be.checked");
    cy.get("#substitute").check().should("be.checked");
    cy.get('textarea[name="instructions"]')
      .type("Please, deliver after 7PM.")
      .should("have.value", "Please, deliver after 7PM.");
    cy.get("#addressBtn").click();

    cy.get('input[name="firstName"]')
      .type("Tatiana")
      .should("have.value", "Tatiana");
    cy.get('input[name="lastName"]')
      .type("Zhizhimontova")
      .should("have.value", "Zhizhimontova");
    cy.get('input[name="location"]')
      .type("1111 Some Ave, Santa Barbara, CA")
      .should("have.value", "1111 Some Ave, Santa Barbara, CA");
    cy.get('input[name="email"]')
      .type("tatyana@gmail.com")
      .should("have.value", "tatyana@gmail.com");
    cy.get("#saveInfo").click();
    cy.get("#submitBtn").click();
  });
});
