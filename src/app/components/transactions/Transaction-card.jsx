import React from 'react';
import PropTypes from 'prop-types';
import TransactionCardMore from './Transaction-card-more';
import Modal from '../modal/Modal';


class TransactionCard extends React.Component {
    render() {
        return (
            <>
                <div className="transaction" onClick={() => this.modal.setModal(true)}>
                    <p>{this.props.transaction.date}</p>
                    <p>{`Köpt ${this.props.transaction.cNameBought}: ${this.props.transaction.sumBought}`}</p>
                    <p>{`Sålt ${this.props.transaction.cNameSold}: ${this.props.transaction.sumSold}`}</p>
                </div>

                <Modal
                    title={'Transaktion'}
                    onMount={(modal) => {this.modal = modal}}
                >
                    <TransactionCardMore
                        transaction={this.props.transaction}
                    />
                </Modal>
            </>
        )
    }
}

TransactionCard.propTypes = {
    transaction: PropTypes.object,
}

export default TransactionCard;