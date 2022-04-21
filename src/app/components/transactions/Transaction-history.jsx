import React from 'react';

import TransactionCard from './Transaction-card.jsx';

class TransactionHistory extends React.Component {
    render() {
        const transactions = this.props.transactions;
        console.log(transactions);
        return (
            <>
                <h1>Transaktionshistorik</h1>
                {(transactions.length !== 0)
                    ? (
                        <div className='transaction-container'>
                            {transactions.map((transaction) => (
                                <TransactionCard key={transaction.id} transaction={transaction} />
                            ))}
                        </div>
                    ) : (
                        <div className='empty'>
                            <h2>Inga transaktioner hittade</h2>
                        </div>
                    )
                }
            </>
        )
    }
}

export default TransactionHistory;
