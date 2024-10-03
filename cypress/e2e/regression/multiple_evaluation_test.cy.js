describe("Verify user is able to evaluate complex expressions multiple times", () => {
    it("Test 1 - Evaluate 99.99 / -99.99 * 25.0 then + 25", () => {
        //Input and evaluate first expression
        cy.inputExpression("99.99/-99.99*25.0");
        cy.verifyExpression("99.99 ÷ -99.99 × 25.0");
        cy.evaluateExpression();
        cy.verifyExpression("-25");
        cy.verifyAnsField("99.99 ÷ -99.99 × 25.0 =");
        
        //Add second expression
        cy.inputExpression("+25");
        cy.verifyExpression("-25 + 25");
        cy.verifyAnsField("Ans = -25");
        cy.evaluateExpression();
        cy.verifyExpression("0");
    });
})