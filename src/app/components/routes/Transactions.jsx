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
            addTransactionOnClick: false,
            deleteTransactionOnClick: false
        }

        this.transactionServices = new TransactionServices();
    }

    componentDidMount = () => {
        this.setState({
            transactions: this.transactionServices.getTransactions()
        })
    }

    handleSubmitTransaction = (transaction) => {
        this.transactionServices.saveTransaction(transaction);

        this.setState({
            transactions: this.transactionServices.getTransactions()
        })
    }

    handleAddTransactionOnClick = () => {
        this.setState({
            addTransactionOnClick: !this.state.addTransactionOnClick
        })
    }

    handleDeleteTransactionOnClick(id) {
        this.transactionServices.deleteTransaction(id);
        this.setState({
            deleteTransactionOnClick: !this.state.deleteTransactionOnClick,
            transactions: this.transactionServices.getTransactions()
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