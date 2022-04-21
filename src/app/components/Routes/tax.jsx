import React from 'react';

import CostAmount from "../../services/cost-amount.js";
import TransactionServices from "../../services/transaction-services.js";

export default class Tax extends React.Component {
    constructor() {
        super();
        this.countTransactions()
    }


    countTransactions() {
        const transactionService = new TransactionServices();
        const transactions = transactionService.checkLocalStorage();
        const costAmount= new CostAmount;
        const countedTransactions = costAmount.countTransactions(transactions);
    }

    render() {
        return (
            <main>
                <h2>tax</h2>
            </main>
        )
    }
}