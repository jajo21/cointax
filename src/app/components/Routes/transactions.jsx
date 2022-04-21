import React from 'react';

import TransactionForm from '../Transactions/Transaction-form.jsx';
import TransactionHistory from '../Transactions/Transaction-history.jsx';
import TransactionServices from '../../services/transaction-services.js';

export default class Transactions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            transactions: []
        }
    }

    handleState = () => {
        let tS = new TransactionServices();
        let currentTransactions = tS.checkLocalStorage();
        if(currentTransactions === null) currentTransactions = [];
        this.setState({
            transactions: currentTransactions
        })
    }

    render() {
        return (
            <main>
                <TransactionForm handleState={this.handleState} transactions={this.state.transactions}/>
            </main>
        )
    }
}