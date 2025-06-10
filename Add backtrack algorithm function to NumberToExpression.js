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

function backtrack(expr, value, depth, maxDepth, target, attempts) {
    attempts.count++;

    if (depth === maxDepth) {
        if (Math.abs(value - target) < 0.0001) {
            return expr;
        }
        return null;
    }

    for (let op of operators) {
        for (let num = 1; num <= 9; num++) {
            const newExpr = `${expr} ${op} ${num}`;
            try {
                const newValue = eval(newExpr);
                const result = backtrack(newExpr, newValue, depth + 1, maxDepth, target, attempts);
                if (result) return result;
            } catch (e) {
                continue;
            }
        }
    }

    return null;
}

function findExpression(target, maxDepth = 3) {
    const attempts = { count: 0 };
    for (let start = 1; start <= 9; start++) {
        const expr = `${start}`;
        const value = start;
        const result = backtrack(expr, value, 0, maxDepth, target, attempts);
        if (result) {
            return { expr: result, attempts: attempts.count };
        }
    }
    return { expr: "Not found :(", attempts: attempts.count };
}

// const result = generateRandomExpression(22);
// console.log("Expression: ", result);

const result = findExpression(22);
console.log(`Expression: ${result.expr}`);
console.log(`Tried ${result.attempts} possibilities`);
