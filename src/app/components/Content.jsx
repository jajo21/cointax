import React from 'react';

import TransactionForm from './transactions/Transaction-form.jsx';

export default class Content extends React.Component {
    render() {
        return (
            <main>
                <TransactionForm />
            </main>
        )
    }
}