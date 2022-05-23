import {createContext, useState, useEffect} from 'react';
import TransactionsService from '../../services/transactions-service';
import { sortTransactionsForView } from '../../helpers/transactions-sorter';

const TransactionsContext = createContext();

export function TransactionsProvider({ children }) {
    const tS = new TransactionsService();
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        let t = tS.getTransactions()
        sortTransactionsForView(t);
        setTransactions(t);
    }, []);

    const addTransaction = (transaction) => {
        setTransactions((prevState) => {
            let newTransactions = [...prevState, transaction];
            sortTransactionsForView(newTransactions);
            return newTransactions;
        });
        tS.saveTransaction(transaction);
    }
    
    const deleteTransaction = (id) => {
        setTransactions(transactions.filter(t => t.id !== id));
        tS.deleteTransaction(id);
    }

    const addWalletTransactions = (walletTransactions) => {
        setTransactions((prevState) => {
           let newTransactions = [...prevState, ...walletTransactions];
           sortTransactionsForView(newTransactions);
           return newTransactions;
        });
        tS.saveTransactions(walletTransactions);
    }

    const deleteWalletTransactions = (walletId) => {
        setTransactions(transactions.filter(t => t.walletId !== walletId));
        tS.deleteTransactions(walletId);
        console.log(transactions);
    }

    return(
        <TransactionsContext.Provider 
            value={{
                transactions,
                addTransaction,
                addWalletTransactions,
                deleteTransaction,
                deleteWalletTransactions
            }}
        >
            {children}
        </TransactionsContext.Provider>
    );
}

export default TransactionsContext;