import React from 'react';

import CostAmount from "../../services/cost-amount.js";
import TransactionServices from "../../services/transaction-services.js";

/* 
---------------------------------------------------


DEN HÄR KLASSEN ÄR INTE FÄRDIG, DEN JOBBAS ÄNNU PÅ


---------------------------------------------------
 */
export default class Tax extends React.Component {
    constructor() {
        super();
        this.countTransactions()
    }


    countTransactions() {
        const transactionService = new TransactionServices();
        let transactions = transactionService.checkLocalStorage();
        if (transactions == null) transactions = [];
        const costAmount= new CostAmount;
        const countedTransactions = costAmount.countTransactions(transactions);
        const test = costAmount.countAmountOfCoins(transactions);
        console.log(test);
    }

    render() {
        return (
            <main>
                <h2>Skatterapport</h2>
            </main>
        )
    }
}