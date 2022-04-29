import React from 'react';
import TransactionCardMore from './Transaction-card-more';

class TransactionCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            onClick: false,
        }
    }

    onClick = () => {
        this.setState({
            onClick: !this.state.onClick,
        })
    }
    render() {
        return(
            <>
                <div className="transaction" onClick={this.onClick}>
                    <p>{this.props.transaction.date}</p>
                    <p>{`Köpt ${this.props.transaction.cNameBought}: ${this.props.transaction.sumBought}`}</p>
                    <p>{`Sålt ${this.props.transaction.cNameSold}: ${this.props.transaction.sumSold}`}</p>
                    <p>klicka på rutan för att se mer</p>
                </div>
                {this.state.onClick && 
                    <TransactionCardMore 
                        close={this.onClick}
                        transaction={this.props.transaction}
                        onDelete={(id) => this.props.onDelete(id)}

                    />}
            </>
        )
    }
}

export default TransactionCard;