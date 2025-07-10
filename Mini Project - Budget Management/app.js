const transactions = [];

const addTransaction = function (_title, _amount, _type, _date) {
    transactions.push({
        title: _title,
        amount: _amount,
        type: _type,
        date: _date
    });
}

const printAllTxs = function () {
    let totalIncome = 0;
    let totalExpense = 0;

    for (let i = 0; i < transactions.length; i++) {
        const date = formatDate(transactions[i].date);
        console.log(`${i + 1}. ${transactions[i].title} - ${transactions[i].amount.toLocaleString()} - ${transactions[i].type} - on ${date}`);

        if (transactions[i].type === 'income') {
            totalIncome += transactions[i].amount;
        } else if (transactions[i].type === 'expense') {
            totalExpense += transactions[i].amount;
        }
    };

    console.log(`\nTotal income: ${totalIncome.toLocaleString()} \nTotal expense: ${totalExpense.toLocaleString()} \nBalance: ${(totalIncome - totalExpense).toLocaleString()}`);
}

const formatDate = function (number) {
    const str = number.toString();
    const year = str.substring(0,4);
    const month = str.substring(4,6) - 1;
    const day = str.substring(6,8);
    
    const date = new Date(year, month, day);

    return date.toDateString();
}

addTransaction('Salary', 100000, 'income', 20250707);
addTransaction('Buy shoe', 2000, 'expense', 20250708);
addTransaction('Cinema', 15, 'expense', 20250710);
addTransaction('Gift', 1500, 'income', 20250710);

printAllTxs();