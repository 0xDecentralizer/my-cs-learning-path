const operators = ['+', '-', '*', '/'];

function getRandomOperator() {
    const index = Math.floor(Math.random() * operators.length)
}

function generateRandomExpression() {
    const a = Math.floor(Math.random() * 10);
    const b = Math.floor(Math.random() * 10);
    const op = getRandomOperator();

    return `${a} ${op} ${b}`;
}

console.log(generateRandomExpression());