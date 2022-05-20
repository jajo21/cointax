import {createContext, useState, useEffect} from 'react';
import TransactionsService from '../../services/transactions-service';

const TransactionsContext = createContext();

export function TransactionsProvider({ children }) {
    const tS = new TransactionsService();
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        let t = tS.getTransactions()
        sortTransactions(t);
        setTransactions(t);
    }, []);

    const addTransaction = (transaction) => {
        setTransactions((prevState) => {
            let newTransactions = [...prevState, transaction];
            sortTransactions(newTransactions);
            return newTransactions;
        });
        tS.saveTransaction(transaction);
    }

    const addWalletTransactions = (walletTransactions) => {
        setTransactions((prevState) => {
           let newTransactions = [...prevState, ...walletTransactions];
           sortTransactions(newTransactions);
           return newTransactions;
        });
        tS.saveTransactions(walletTransactions);
    }

    const deleteWalletTransactions = (walletId) => {
        setTransactions(transactions.filter(t => t.walletId !== walletId));
        tS.deleteTransactions(walletId);
        console.log(transactions);
    }

    const deleteTransaction = (id) => {
        setTransactions(transactions.filter(t => t.id !== id));
        tS.deleteTransaction(id);
    }

    const sortTransactions = (transactions) => {
        transactions.sort((a, b) => {
            return new Date(b.date) - new Date(a.date);
        })
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