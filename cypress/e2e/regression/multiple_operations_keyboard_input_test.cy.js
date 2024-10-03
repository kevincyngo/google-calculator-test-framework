describe("Verify user is able to evaluate complex expressions using keyboard input", () => {
    it("Test 1 - Evaluate 123.55 * -3.25", () => {
        cy.inputExpressionWithKeyboard("123.55*-3.25")
        cy.verifyExpression("123.55 × -3.25");
        cy.evaluateExpressionWithKeyboard()
        cy.verifyExpression("-401.5375")
        cy.verifyAnsField("123.55 × -3.25 =");
    })
})