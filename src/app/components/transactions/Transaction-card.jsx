import React from 'react';

class TransactionCard extends React.Component {
    render() {
        return(
            <div className='transaction'>
                <p>{this.props.transaction.date}</p>
                <p>{this.props.transaction.cNameBought}</p>
                <p>{this.props.transaction.sumBought}</p>
                <p>{this.props.transaction.cNameSold}</p>
                <p>{this.props.transaction.sumSold}</p>
            </div>
        )
    }
}

export default TransactionCard;