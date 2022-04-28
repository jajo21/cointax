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
    }

    componentDidMount = () => {
        let tS = new TransactionServices();
        this.setState({
            transactions: tS.getTransactions()
        })
        console.log('Component did mount');
    }

    handleUpdate = (transaction) => {
        let tS = new TransactionServices();
        tS.saveTransaction(transaction);

        this.setState({
            transactions: tS.getTransactions()
        })
        console.log('Transaktioner har uppdaterats i localstorage och på skärmen');
    }

    render() {
        return (
            <main>
                <TransactionHistory transactions={this.state.transactions}/>
                <TransactionForm handleUpdate={this.handleUpdate}/>
            </main>
        )
    }
} 