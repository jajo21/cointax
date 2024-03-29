import React from 'react';
import TransactionForm from '../transactions/Transaction-form.jsx';
import TransactionHistory from '../transactions/Transaction-history.jsx';
import Modal from '../modal/Modal.jsx';
import './css/transactions.css';

export default class Transactions extends React.Component {
    render() {
        return (
            <div className='transactions-route'>
                <h2>Transaktioner</h2>
                <div className='add-transaction-button-div'>
                    <button
                        className='add-transaction-button'
                        onClick={() => this.modal.setModal(true)}
                    >Lägg till transaktion
                    </button>
                </div>

                <Modal
                    title={'Lägg till transaktion'}
                    onMount={(modal) => {this.modal = modal}}
                >
                    <TransactionForm
                        closeForm={() => this.modal.setModal(false)}
                    />
                </Modal>
                <TransactionHistory />
            </div>
        )
    }
}