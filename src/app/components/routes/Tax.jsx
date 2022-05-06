import React from 'react';

import CostAmount from "../../services/cost-amount.js";
import TransactionsService from "../../services/transactions-service.js";

/* 
---------------------------------------------------


DEN HÄR KLASSEN ÄR INTE FÄRDIG, DEN JOBBAS ÄNNU PÅ


---------------------------------------------------
 */
export default class Tax extends React.Component {
    constructor(props) {
        super(props);
        this.countTransactions()
    }


    countTransactions() {
        const transactionsService = new TransactionsService();
        let transactions = transactionsService.getTransactions();
        if (transactions == null) transactions = [];
        const costAmount= new CostAmount;
        const countedTransactions = costAmount.countTransactions(transactions);
        const test = costAmount.countAmountOfCoins(transactions);
        console.log(test);
    }

    render() {
        return (
            <>
                <h2>Skatterapport</h2>
                <p>Sidan är under konstruktion</p>
            </>
        )
    }
} 