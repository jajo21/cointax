import React from 'react';

class TransactionCard extends React.Component {
    render() {
        return(
            <div>
                <p>{this.props.transaction.date}</p>
                <p>{`Transaktion: ${this.props.transaction.id}`}</p>
                <p>{`Köpt ${this.props.transaction.cNameBought}: ${this.props.transaction.sumBought}`}</p>
                <p>{`Sålt ${this.props.transaction.cNameSold}: ${this.props.transaction.sumSold}`}</p>
            </div>
        )
    }
}

export default TransactionCard;