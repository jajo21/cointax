import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../modal/Modal';

import './transactions-css/transaction-card-more.css';

class TransactionCardMore extends React.Component {
    render() {
        return(
                <Modal
                    open={this.props.open}
                    onClose={this.props.onClose}
                    title={'Transaktion'}
                >
                    <div className='transaction-more-info-content'>
                        <p>{this.props.transaction.date}</p>
                        <p>{`Transaktion: ${this.props.transaction.id}`}</p>
                        <p>{`Köpt ${this.props.transaction.cNameBought}: ${this.props.transaction.sumBought}`}</p>
                        <p>{`Sålt ${this.props.transaction.cNameSold}: ${this.props.transaction.sumSold}`}</p>
                    </div>
                    <div>
                        <button className='delete-button' onClick={() => this.props.onDelete(this.props.transaction.id)}>Ta Bort</button>
                    </div>
                </Modal>
        )
    }
}

TransactionCardMore.propTypes = {
    onClose: PropTypes.func,
    open: PropTypes.bool,
    transaction: PropTypes.object,
    onDelete: PropTypes.func
}

export default TransactionCardMore;