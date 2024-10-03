describe("Verify the elements on the screen", () => {
  it("Test 1 - Verify the visibility of the elements on the screen", () => {
    cy.verifyElementsVisible();
  });
  it("Test 2 - Verify value of elements", () => {
    cy.verifyElementValues();
  });
  it("Test 3 - Verify the default value is 0", () => {
    cy.verifyExpression("0");
  });
  it("Test 4 - Verify Ans field", () => {
    cy.inputExpression("0");
    cy.verifyAnsField("Ans = 0");
  });
});

describe("Verify that user is able to input numbers", () => {
  it("Test 1 - Verify functionality of number buttons 0-9", () => {
    cy.inputExpression("1234567890");
    cy.verifyExpression("1234567890");
  });
});

describe("Verify math operations", () => {
  it("Test 1 - Evaluate 8 + 3", () => {
    cy.inputExpression("8+3");
    cy.verifyExpression("8 + 3");
    cy.evaluateExpression();
    cy.verifyExpression("11");
  });
  it("Test 2 - Evaluate 5 - 10", () => {
    cy.inputExpression("5-10");
    cy.verifyExpression("5 - 10");
    cy.evaluateExpression();
    cy.verifyExpression("-5");
  });
  it("Test 3 - Evaluate 9 x 9", () => {
    cy.inputExpression("9*9");
    cy.verifyExpression("9 × 9");
    cy.evaluateExpression();
    cy.verifyExpression("81");
  });
  it("Test 4 - Evaluate 4 / 5", () => {
    cy.inputExpression("4/5");
    cy.verifyExpression("4 ÷ 5");
    cy.evaluateExpression();
    cy.verifyExpression("0.8");
  });
  it("Test 5 - Evaluate 8.3 + 3.2", () => {
    cy.inputExpression("8.3+3.2");
    cy.verifyExpression("8.3 + 3.2");
    cy.evaluateExpression();
    cy.verifyExpression("11.5");
  });
});

describe("Verify AC/CE button functionality", () => {
  it("Test 1 - Verify CE button", () => {
    cy.inputExpression("123");
    cy.clickClearEntry();
    cy.verifyExpression("12");
  });
  it("Test 2 - Verify AC button", () => {
    cy.inputExpression("1+1");
    cy.evaluateExpression();
    cy.verifyExpression("2");
    cy.clickAllClear();
  });
});