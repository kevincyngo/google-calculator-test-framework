describe("Verify user is able to evaluate complex expressions", () => {
    it("Test 1 - Evaluate 123.55 * -3.25", () => {
        cy.inputExpression("123.55*-3.25");
        cy.verifyExpression("123.55 × -3.25");
        cy.evaluateExpression();
        cy.verifyExpression("-401.5375");
        cy.verifyAnsField("123.55 × -3.25 =");
    });

    it("Test 2 - Evaluate 99.99 / -99.99 * 25.0", () => {
        cy.inputExpression("99.99/-99.99*25.0");
        cy.verifyExpression("99.99 ÷ -99.99 × 25.0");
        cy.evaluateExpression();
        cy.verifyExpression("-25");
        cy.verifyAnsField("99.99 ÷ -99.99 × 25.0 =");
    });
})