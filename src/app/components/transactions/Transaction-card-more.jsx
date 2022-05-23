import React from 'react';
import PropTypes from 'prop-types';

import TransactionsContext from '../contexts/TransactionsContext';
import './transactions-css/transaction-card-more.css';

class TransactionCardMore extends React.Component {
    render() {
        let date = new Date(this.props.transaction.date);
        let options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', secounds: 'numeric'};
        const transaction = this.props.transaction;
        return(
            <>
                <div className='transaction-more-info-content'>
                    <p>{date.toLocaleDateString("sv-SV", options)}</p>
                    <p>{`Transaktions-ID: ${transaction.id}`}</p>
                    <p>{`Plånbok/kryptobörs: ${transaction.walletSite}`}</p>
                    <p>{`Köpt: ${transaction.sumBought} ${transaction.cNameBought}`}</p>
                    <p>{`Kostnad: ${transaction.sumSold} ${transaction.cNameSold}`}</p>
                </div>
                <div>
                    <button className='delete-button' onClick={() => this.context.deleteTransaction(transaction.id)}>Ta Bort</button>
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