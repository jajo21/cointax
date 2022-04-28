import React from 'react';

import TransactionServices from '../../services/transaction-services.js';
import TransactionForm from '../transactions/Transaction-form.jsx';
import TransactionHistory from '../transactions/Transaction-history.jsx';

export default class Transactions extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            transactions: []
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

    render() {
        return (
            <>
                <TransactionHistory transactions={this.state.transactions}/>
                <TransactionForm handleUpdate={this.handleUpdate}/>
            </>
        )
    }
} 