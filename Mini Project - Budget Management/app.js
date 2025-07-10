const transactions = [];

const txGenerator = function (_title, _amount, _type, _date) {
    transactions.push({
        title: _title,
        amount: _amount,
        type: _type,
        date: _date
    });
}

