const { numberButtons, calculatorScreen, operationButtons } = require("../support/calculator_locators");

const buttonEnum = {
    "0" : numberButtons.zero,
    "1" : numberButtons.one,
    "2" : numberButtons.two,
    "3" : numberButtons.three,
    "4" : numberButtons.four,
    "5" : numberButtons.five,
    "6" : numberButtons.six,
    "7" : numberButtons.seven,
    "8" : numberButtons.eight,
    "9" : numberButtons.nine,
    "." : numberButtons.decimal,
    "+" : operationButtons.add,
    "-" : operationButtons.subtract,
    "*" : operationButtons.multiply,
    "/" : operationButtons.divide
};

Cypress.Commands.add("inputExpression", (expression) => {
  [...expression].forEach(input => {
    cy.get(buttonEnum[input].locator).click({ force: true });
  });
});

Cypress.Commands.add("inputExpressionWithKeyboard", (expression) => {
  cy.get(calculatorScreen.calculatorInputField.locator).click({ force: true })
  cy.get(calculatorScreen.calculatorInputField.locator).parents("div[tabindex]").first().type(expression, { force: true })
});

Cypress.Commands.add("evaluateExpression", () => {
  cy.get(operationButtons.equals.locator).click({ force: true });
});

Cypress.Commands.add("evaluateExpressionWithKeyboard", () => {
  cy.get(calculatorScreen.calculatorInputField.locator).parents("div[tabindex]").first().type("{enter}", { force: true })
});


Cypress.Commands.add("clickClearEntry", () => {
  cy.get(operationButtons.deleteCE.locator).click({ force: true });
});

Cypress.Commands.add("clickAllClear", () => {
  cy.get(operationButtons.deleteAC.locator).click({ force: true });
});

Cypress.Commands.add("verifyExpression", (value) => {
  cy.get(calculatorScreen.calculatorInputField.locator).invoke('text').should("eq", value)
});

Cypress.Commands.add("verifyAnsField", (value) => {
  cy.get(calculatorScreen.ansField.locator).invoke('text').should("eq", value)
});

Cypress.Commands.add("verifyElementsVisible", () => {
  cy.get(calculatorScreen.calculatorInputField.locator).should("be.visible");
  cy.get(numberButtons.one.locator).should("be.visible");
  cy.get(numberButtons.two.locator).should("be.visible");
  cy.get(numberButtons.three.locator).should("be.visible");
  cy.get(numberButtons.four.locator).should("be.visible");
  cy.get(numberButtons.five.locator).should("be.visible");
  cy.get(numberButtons.six.locator).should("be.visible");
  cy.get(numberButtons.seven.locator).should("be.visible");
  cy.get(numberButtons.eight.locator).should("be.visible");
  cy.get(numberButtons.nine.locator).should("be.visible");
  cy.get(numberButtons.zero.locator).should("be.visible");
  cy.get(numberButtons.decimal.locator).should("be.visible");
  cy.get(operationButtons.equals.locator).should("be.visible");
  cy.get(operationButtons.deleteAC.locator).should("be.visible");
  cy.get(operationButtons.divide.locator).should("be.visible");
  cy.get(operationButtons.multiply.locator).should("be.visible");
  cy.get(operationButtons.subtract.locator).should("be.visible");
  cy.get(operationButtons.add.locator).should("be.visible");
});

Cypress.Commands.add("verifyElementValues", () => {
  cy.get(calculatorScreen.calculatorInputField.locator).invoke('text').should("eq", numberButtons.zero.value);
  cy.get(numberButtons.one.locator).invoke('text').should("eq", numberButtons.one.value);
  cy.get(numberButtons.two.locator).invoke('text').should("eq", numberButtons.two.value);
  cy.get(numberButtons.three.locator).invoke('text').should("eq", numberButtons.three.value);
  cy.get(numberButtons.four.locator).invoke('text').should("eq", numberButtons.four.value);
  cy.get(numberButtons.five.locator).invoke('text').should("eq", numberButtons.five.value);
  cy.get(numberButtons.six.locator).invoke('text').should("eq", numberButtons.six.value);
  cy.get(numberButtons.seven.locator).invoke('text').should("eq", numberButtons.seven.value);
  cy.get(numberButtons.eight.locator).invoke('text').should("eq", numberButtons.eight.value);
  cy.get(numberButtons.nine.locator).invoke('text').should("eq", numberButtons.nine.value);
  cy.get(numberButtons.zero.locator).invoke('text').should("eq", numberButtons.zero.value);
  cy.get(numberButtons.decimal.locator).invoke('text').should("eq", numberButtons.decimal.value);
  cy.get(operationButtons.equals.locator).invoke('text').should("eq", operationButtons.equals.value);
  cy.get(operationButtons.deleteAC.locator).invoke('text').should("eq", operationButtons.deleteAC.value);
  cy.get(operationButtons.divide.locator).invoke('text').should("eq", operationButtons.divide.value);
  cy.get(operationButtons.multiply.locator).invoke('text').should("eq", operationButtons.multiply.value);
  cy.get(operationButtons.subtract.locator).invoke('text').should("eq", operationButtons.subtract.value);
  cy.get(operationButtons.add.locator).invoke('text').should("eq", operationButtons.add.value);
});