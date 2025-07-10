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

