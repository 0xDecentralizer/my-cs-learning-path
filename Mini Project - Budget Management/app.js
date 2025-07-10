const transactions = [];

const txGenerator = function (_title, _amount, _type, _date) {
    transactions.push({
        title: _title,
        amount: _amount,
        type: _type,
        date: _date
    });
}

const printAllTxs = function () {
    for (let i = 0; i < transactions.length; i++) {
        const date = calcDate(transactions[i].date);
        console.log(`${i + 1}. ${transactions[i].title} - ${transactions[i].amount} - ${transactions[i].type} - at ${date}`);
    };
}

const calcDate = function (number) {
    const str = number.toString();
    const year = str.substring(0,4);
    const month = str.substring(4,6);
    const day = str.substring(6,8);
    
    const date = new Date(`${year}-${month}-${day}`);

    return date.toDateString();
}

txGenerator('Buy shoe', 2000, 'outcome', 20250708);
txGenerator('Salary', 100000, 'income', 20250709);
txGenerator('Cinema', 15, 'outcome', 20250710);

printAllTxs();