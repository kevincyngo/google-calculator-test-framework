const calculatorScreen = {
    calculatorInputField: {
        locator: '[jsname="VssY5c"]'
    },
    ansField: {
        locator: '[jsname="ubtiRe"]'
    }
};

const numberButtons = {
    zero: {
        locator: '[jsname="bkEvMb"]',
        value: '0'
    },
    one: {
        locator: '[jsname="N10B9"]',
        value: '1'
    },
    two: {
        locator: '[jsname="lVjWed"]',
        value: '2'
    },
    three: {
        locator: '[jsname="KN1kY"]',
        value: '3'
    },
    four: {
        locator: '[jsname="xAP7E"]',
        value: '4'
    },
    five: {
        locator: '[jsname="Ax5wH"]',
        value: '5'
    },
    six: {
        locator: '[jsname="abcgof"]',
        value: '6'
    },
    seven: {
        locator: '[jsname="rk7bOd"]',
        value: '7'
    },
    eight: {
        locator: '[jsname="T7PMFe"]',
        value: '8'
    },
    nine: {
        locator: '[jsname="XoxYJ"]',
        value: '9'
    },
    decimal: {
        locator: '[jsname="YrdHyf"]',
        value: '.'
    }
};

const operationButtons = {
    divide: {
        locator: '[jsname="WxTTNd"]',
        value: '÷'
    },
    multiply: {
        locator: '[jsname="YovRWb"]',
        value: '×'
    },
    subtract: {
        locator: '[jsname="pPHzQc"]',
        value: '−'
    },
    add: {
        locator: '[jsname="XSr6wc"]',
        value: '+',
    },
    equals: {
        locator: '[jsname="Pt8tGc"]',
        value: '='
    },
    deleteAC: {
        locator: '[jsname="SLn8gc"]',
        value: 'AC'
    },
    deleteCE: {
        locator: '[jsname="H7sWPd"]',
        value: 'CE'
    }
};

module.exports = {
    calculatorScreen,
    numberButtons,
    operationButtons
};