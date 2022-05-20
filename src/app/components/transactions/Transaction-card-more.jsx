import React from 'react';
import PropTypes from 'prop-types';

import TransactionsContext from '../contexts/TransactionsContext';
import './transactions-css/transaction-card-more.css';

class TransactionCardMore extends React.Component {
    render() {
        return(
            <>
                <div className='transaction-more-info-content'>
                    <p>{this.props.transaction.date}</p>
                    <p>{`Transaktion: ${this.props.transaction.id}`}</p>
                    <p>{`Köpt: ${this.props.transaction.sumBought} ${this.props.transaction.cNameBought}`}</p>
                    <p>{`Kostnad: ${this.props.transaction.sumSold} ${this.props.transaction.cNameSold}`}</p>
                </div>
                <div>
                    <button className='delete-button' onClick={() => this.context.deleteTransaction(this.props.transaction.id)}>Ta Bort</button>
                </div>
            </>
        )
    }
}

TransactionCardMore.propTypes = {
    transaction: PropTypes.object,
}

TransactionCardMore.contextType = TransactionsContext;

export default TransactionCardMore;