const operators = ['+', '-', '*', '/'];

function getRandomOperator() {
    const index = Math.floor(Math.random() * operators.length);
    return operators[index];
}

function generateRandomExpression(target) {
    for (let attemp = 0; attemp < 100; attemp++) {
        const a = Math.floor((Math.random() * 9) + 1);
        const b = Math.floor((Math.random() * 9) + 1);
        const c = Math.floor((Math.random() * 9) + 1);

        const op1 = getRandomOperator();
        const op2 = getRandomOperator();

        const expr = `${a} ${op1} ${b} ${op2} ${c}`;

        try {
            const result = eval(expr);

            if (Math.abs(result - target) < 0.0001) {
                return expr;
            }
        } catch (e) {
            continue;
        }
    }

    return "Oh soory :( I could'nt find it";
}

const result = generateRandomExpression(22);
console.log("Expression: ", result);