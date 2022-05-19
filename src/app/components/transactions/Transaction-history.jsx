import React from 'react';

import TransactionCard from './Transaction-card.jsx';
import TransactionsContext from '../../contexts/TransactionsContext';
import './transactions-css/transaction-history.css';

class TransactionHistory extends React.Component {

    render() {
        const transactions = this.context.transactions;
        return (
            <div className='transaction-history'>
                <h2>Transaktionshistorik</h2>
                {(transactions.length !== 0)
                    ? (
                        <div className='transaction-container'>
                            {transactions.map((transaction) => (
                                <TransactionCard 
                                    key={transaction.id} 
                                    transaction={transaction}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className='empty'>
                            <p>Inga transaktioner hittade</p>
                        </div>
                    )
                }
            </div>
        )
    }
}

TransactionHistory.contextType = TransactionsContext;
export default TransactionHistory;