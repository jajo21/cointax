import {createContext, useState, useEffect} from 'react';
import TransactionsService from '../services/transactions-service';

const TransactionsContext = createContext();

export function TransactionsProvider({ children }) {
    const tS = new TransactionsService();
    const [transactions, setTransactions] = useState(null);

    useEffect(() => {
        setTransactions(tS.getTransactions());
    }, []);

    const addTransaction = (transaction) => {
        setTransactions((prevState) => [...prevState, transaction]);
        tS.saveTransaction(transaction);
    }

    const deleteTransaction = (id) => {
        setTransactions(transactions.filter(t => t.id !== id));
        tS.deleteTransaction(id);
    }

    return(
        <TransactionsContext.Provider 
            value={{
                transactions,
                addTransaction,
                deleteTransaction
            }}
        >
            {children}
        </TransactionsContext.Provider>
    );
}

export default TransactionsContext;