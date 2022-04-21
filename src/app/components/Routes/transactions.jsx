import React from 'react';

import TransactionForm from '../Transactions/Transaction-form.jsx';
import TransactionHistory from '../Transactions/Transaction-history.jsx';
import TransactionServices from '../../services/transaction-services.js';

export default class Transactions extends React.Component {
    render() {
        return (
            <main>
                <TransactionForm/>
            </main>
        )
    }
}