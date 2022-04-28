import React from 'react';

import TransactionCard from './Transaction-card.jsx';
import { Link } from 'react-router-dom';
import './transaction-history.css';

class TransactionHistory extends React.Component {

    render() {
        const transactions = this.props.transactions;
        return (
            <div className='transaction-history'>
                <h1>Transaktionshistorik</h1>
                {(transactions.length !== 0)
                    ? (
                        <div className='transaction-container'>
                            {transactions.map((transaction) => (
                                <Link
                                    className='transaction'
                                    to={`/transactions/${transaction.id}`}
                                    key={transaction.id}
                                >
                                    <TransactionCard key={transaction.id} transaction={transaction} />
                                </Link>
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

export default TransactionHistory;
