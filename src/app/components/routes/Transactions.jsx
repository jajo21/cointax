import React from 'react';

import './transactions.css';

import TransactionServices from '../../services/transaction-services.js';
import TransactionForm from '../transactions/Transaction-form.jsx';
import TransactionHistory from '../transactions/Transaction-history.jsx';

export default class Transactions extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            transactions: [],
            addTransactionOnClick: false
        }

        this.transactionServices = new TransactionServices();
    }

    componentDidMount = () => {
        this.setState({
            transactions: this.transactionServices.getTransactions()
        })
        console.log('Component did mount');
    }

    handleUpdate = (transaction) => {
        this.transactionServices.saveTransaction(transaction);

        this.setState({
            transactions: this.transactionServices.getTransactions()
        })
        console.log('Transaktioner har uppdaterats i localstorage och på skärmen');
    }

    handleAddTransactionOnClick = () => {
        this.setState({
            addTransactionOnClick: !this.state.addTransactionOnClick
        })
    }

    render() {
        return (
            <>
                <TransactionHistory transactions={this.state.transactions}/>
                <button
                    className='add-transaction-button'
                    onClick={this.handleAddTransactionOnClick}
                    >Lägg till transaktion
                </button>
                {this.state.addTransactionOnClick && <TransactionForm closeModal={this.handleAddTransactionOnClick} handleUpdate={this.handleUpdate}/>}
            </>
        )
    }
} 