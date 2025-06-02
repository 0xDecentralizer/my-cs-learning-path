const operators = ['+', '-', '*', '/'];

function getRandomOperator() {
    const index = Math.floor(Math.random() * operators.length);
    return operators[index];
}

function generateRandomExpression() {
    const a = Math.floor(Math.random() * 10);
    const b = Math.floor(Math.random() * 10);
    const op = getRandomOperator();

    return `${a} ${op} ${b}`;
}

const expr = generateRandomExpression();
console.log("Expression: ", expr);
console.log("Result: ", eval(expr));