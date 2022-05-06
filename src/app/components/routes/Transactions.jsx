import React from 'react';

import './css/transactions.css';

import TransactionsService from '../../services/transactions-service.js';
import TransactionForm from '../transactions/Transaction-form.jsx';
import TransactionHistory from '../transactions/Transaction-history.jsx';

export default class Transactions extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            transactions: [],
            addTransactionOnClick: false,
            deleteTransactionOnClick: false
        }

        this.transactionsService = new TransactionsService();
    }

    componentDidMount = () => {
        this.setState({
            transactions: this.transactionsService.getTransactions()
        })
    }

    handleSubmitTransaction = (transaction) => {
        this.transactionsService.saveTransaction(transaction);

        this.setState({
            transactions: this.transactionsService.getTransactions()
        })
    }

    handleAddTransactionOnClick = () => {
        this.setState({
            addTransactionOnClick: !this.state.addTransactionOnClick
        })
    }

    handleDeleteTransactionOnClick(id) {
        this.transactionsService.deleteTransaction(id);
        this.setState({
            deleteTransactionOnClick: !this.state.deleteTransactionOnClick,
            transactions: this.transactionsService.getTransactions()
        })
    }

    render() {
        return (
            <>
                <TransactionHistory 
                    onDelete={(id) => this.handleDeleteTransactionOnClick(id)} 
                    transactions={this.state.transactions}
                />
                <div className='add-transaction-button-div'>
                    <button
                        className='add-transaction-button'
                        onClick={this.handleAddTransactionOnClick}
                        >Lägg till transaktion
                    </button>
                </div>

                {this.state.addTransactionOnClick && 
                    <TransactionForm 
                        closeModal={this.handleAddTransactionOnClick} 
                        handleSubmit={this.handleSubmitTransaction}
                    />
                }
            </>
        )
    }
} 