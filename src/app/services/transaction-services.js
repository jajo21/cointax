class TransactionServices {
    getTransactions() {
        if (localStorage.getItem('transactions') !== null || undefined) {
            let transactions = JSON.parse(localStorage.getItem('transactions'));
            return transactions;
        } else {
            return [];
        }
    }

    saveTransaction(transaction) {
        let allTransactions = this.getTransactions();
        transaction.id = allTransactions.length+1;
        allTransactions.push(transaction);
        localStorage.setItem('transactions', JSON.stringify(allTransactions));
        console.log(allTransactions);
    }
}

export default TransactionServices;