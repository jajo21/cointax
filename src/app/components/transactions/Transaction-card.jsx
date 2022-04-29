import React from 'react';

class TransactionCard extends React.Component {
    render() {
        return(
            <div className="transaction">
                <p>{this.props.transaction.date}</p>
                <p>{`Transaktion: ${this.props.transaction.id}`}</p>
                <p>{`Köpt ${this.props.transaction.cNameBought}: ${this.props.transaction.sumBought}`}</p>
                <p>{`Sålt ${this.props.transaction.cNameSold}: ${this.props.transaction.sumSold}`}</p>
                <button>Ta bort</button>
            </div>
        )
    }
}

export default TransactionCard;