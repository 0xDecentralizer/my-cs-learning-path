const transactions = [];
let totalIncome = 0;
let totalExpense = 0;
let saveBox = 0;

const addTransaction = function (_title, _amount, _type, _date) {
    if (_type === 'income' || _type === 'expense' || _type === 'saving') {
        transactions.push({
            title: _title,
            amount: _amount,
            type: _type,
            date: _date
        });
    } else {

    }
}

const printAllTxs = function () {

    for (let i = 0; i < transactions.length; i++) {
        const date = formatDate(transactions[i].date);
        console.log(`${i + 1}. ${transactions[i].title} - ${transactions[i].amount.toLocaleString()} - ${transactions[i].type} - on ${date}`);

        if (transactions[i].type === 'income') {
            totalIncome += transactions[i].amount;
        } else if (transactions[i].type === 'expense') {
            totalExpense += transactions[i].amount;
        } else if (transactions[i].type === 'saving') {
            saveBox += transactions[i].amount;
        }
    };

    console.log(`\nTotal income: ${totalIncome.toLocaleString()} \nTotal expense: ${totalExpense.toLocaleString()} \nBalance: ${(totalIncome - totalExpense - saveBox).toLocaleString()} \nSave box: ${saveBox.toLocaleString()}`);
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
addTransaction('Buy shoe', 900, 'expense', 20250708);
addTransaction('Cinema', 100, 'expense', 20250710);
addTransaction('Gift', 1000, 'income', 20250710);
addTransaction('Save', 1000, 'saving', 20250712);

printAllTxs();