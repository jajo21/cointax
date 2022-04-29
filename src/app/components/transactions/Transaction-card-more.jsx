import React from 'react';

import './transactions-css/transaction-card-more.css';

class TransactionCardMore extends React.Component {


    render() {
        return(
            <div className='transaction-card-more-background'>
                <div className='transaction-card-more-container'>
                    <div className='transaction-card-more-close'>
                        <button onClick={() => this.props.close()}> X </button>
                    </div>
                    <p>{this.props.transaction.date}</p>
                    <p>{`Transaktion: ${this.props.transaction.id}`}</p>
                    <p>{`Köpt ${this.props.transaction.cNameBought}: ${this.props.transaction.sumBought}`}</p>
                    <p>{`Sålt ${this.props.transaction.cNameSold}: ${this.props.transaction.sumSold}`}</p>
                    <button onClick={() => this.props.onDelete(this.props.transaction.id)}>Ta Bort</button>
                </div>
            </div>
        )
    }
}

export default TransactionCardMore;