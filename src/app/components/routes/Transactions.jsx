import React from 'react';
import TransactionForm from '../transactions/Transaction-form.jsx';
import TransactionHistory from '../transactions/Transaction-history.jsx';
import CoinsApiCaller from '../../api-callers/coins-api-caller';
import TransactionsContext from '../../contexts/TransactionsContext.js';
import Modal from '../modal/Modal.jsx';
import './css/transactions.css';

export default class Transactions extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            coins: [],
        }

        this.coinsCaller = new CoinsApiCaller();
    }

    componentDidMount = async () => {
        this.setState({
            coins: await this.coinsCaller.getCurrencies(),
        })
    }

    render() {

        return (
            <>
                <TransactionHistory />

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
                        coins={this.state.coins}
                    />
                </Modal>

            </>
        )
    }
}

Transactions.contextType = TransactionsContext;