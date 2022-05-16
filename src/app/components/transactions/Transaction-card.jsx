import React from 'react';
import PropTypes from 'prop-types';
import TransactionCardMore from './Transaction-card-more';


class TransactionCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editTransactionOnClick: false,
        }
    }

    handleEditTransactionOnClick = () => {
        this.setState({
            editTransactionOnClick: !this.state.editTransactionOnClick,
        })
    }
    render() {
        return(
            <>
                <div className="transaction" onClick={this.handleEditTransactionOnClick}>
                    <p>{this.props.transaction.date}</p>
                    <p>{`Köpt ${this.props.transaction.cNameBought}: ${this.props.transaction.sumBought}`}</p>
                    <p>{`Sålt ${this.props.transaction.cNameSold}: ${this.props.transaction.sumSold}`}</p>
                    <p>klicka på rutan</p>
                </div>
                {this.state.editTransactionOnClick && // SKA JAG HA KVAR DET HÄR?
                    <TransactionCardMore 
                        onClose={this.handleEditTransactionOnClick}
                        open={this.state.editTransactionOnClick}
                        transaction={this.props.transaction}
                        onDelete={(id) => this.props.onDelete(id)}
                    />}
            </>
        )
    }
}

TransactionCard.propTypes = {
    open: PropTypes.bool,
    onClose: PropTypes.func,
    transaction: PropTypes.object,
    onDelete: PropTypes.func
}

export default TransactionCard;