class TransactionServices {
    checkLocalStorage() {
        if (localStorage.getItem('transactions') !== null || undefined) {
            let transactions = JSON.parse(localStorage.getItem('transactions'));
            return transactions;
        } else {
            return null;
        }
    }

    saveTransaction(transaction) {
        localStorage.setItem('transactions', JSON.stringify(transaction));
    }
}

export default TransactionServices;