import { nanoid } from "nanoid";

class TransactionsService {
    getTransactions() {
        if (localStorage.getItem('transactions') !== null || undefined) {
            let transactions = JSON.parse(localStorage.getItem('transactions'));
            return transactions;
        } else {
            return [];
        }
    }

    getTransaction(id) {
        let transactions = this.getTransactions();
        return transactions.find(
            transaction => transaction.id === id
        );
    }

    saveTransaction(transaction) {
        let allTransactions = this.getTransactions();
        transaction.id = nanoid();
        transaction.walletSite = 'Manuell transaktion';
        allTransactions.push(transaction);
        localStorage.setItem('transactions', JSON.stringify(allTransactions));
    }
    
    saveTransactions(transactions) {
        let allTransactions = this.getTransactions();
        allTransactions.push(...transactions);
        localStorage.setItem('transactions', JSON.stringify(allTransactions));
    }
    deleteTransactions(walletId) {
        let allTransactions = this.getTransactions();
        allTransactions.filter(t => t.walletId !== walletId);
        localStorage.setItem('transactions', JSON.stringify(allTransactions));
    }

    deleteTransaction(id) {
        let transactions = this.getTransactions();
        transactions = transactions.filter(
            transaction => transaction.id !== id
        );
        localStorage.setItem('transactions', JSON.stringify(transactions));
    }
}

export default TransactionsService;