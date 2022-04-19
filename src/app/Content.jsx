import React from 'react';

import TransactionForm from './Transaction-form.jsx';
import TransactionHistory from './Transaction-history.jsx';

export default class Content extends React.Component {
    render() {
        return (
            <main>
                <TransactionForm />
            </main>
        )
    }
}