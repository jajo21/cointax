import React from 'react';
import TaxService from '../../services/tax-service';
import TransactionsContext from '../contexts/TransactionsContext';
import './css/tax.css';

export default class Tax extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            onClick: false,
        }

        this.taxService = new TaxService();
    }

    render() {
        let numberFormat = Intl.NumberFormat();
        let transactions = this.context.transactions;
        let countedTransactions;
        let error;
        if (transactions.length !== 0) {
            countedTransactions = this.taxService.countTaxes(transactions); // Hämtar ny array av transaktionerna och lägger till nödvändiga delar som ska läggas till i en k4a
            const totalCoins = countedTransactions.some(t => t.totalCoins < 0);
            if(totalCoins) {
                error = "Skatteuträkning är defekt! Nuvarande historik säger att det sålts fler valutor än vad det har köpts, rätta till felet och försök igen.";
            }
        } else {
            error = 'Finns inga transaktioner att räkna ut skatten på';
        }
        return (
            <>
                <h2 className='tax-title'>Skatterapport</h2>

                <div className='tax-button-div'>
                    <button className='main-button' onClick={() => { this.setState({ onClick: !this.state.onClick }) }}>Generera skatterapport</button>
                </div>
                {this.state.onClick && countedTransactions &&
                    <div className='table-container'>
                        <table className='table'>
                            <thead className='thead'>
                                <tr className='tr-head'>
                                    <th>Datum</th>
                                    <th>Antal</th>
                                    <th>Beteckning</th>
                                    <th>Försäljningspris</th>
                                    <th>Omkostnadsbelopp</th>
                                    <th>Vinst</th>
                                    <th>Förlust</th>
                                </tr>
                            </thead>
                            <tbody className='tbody'>
                                {countedTransactions.map((transaction) => {
                                    if (transaction.hasOwnProperty('winOrLossOnSell')) {
                                        let date = new Date(transaction.date);
                                        return (
                                            <tr key={transaction.id} className='tr-body'>
                                                <td>{date.toLocaleDateString("sv-SV")}</td>
                                                <td>{numberFormat.format(transaction.sumSold)}</td>
                                                <td>{transaction.cNameSold}</td>
                                                <td>{numberFormat.format(transaction.sumBought)}</td>
                                                <td>{numberFormat.format(transaction.usedCostAmount)}</td>
                                                <td>{(transaction.winOrLossOnSell > 0) && numberFormat.format(transaction.winOrLossOnSell)}</td>
                                                <td>{(transaction.winOrLossOnSell < 0) && numberFormat.format(transaction.winOrLossOnSell)}</td>
                                            </tr>
                                        )
                                    }
                                })}
                            </tbody>
                        </table>
                    </div>
                }
                {this.state.onClick && error &&
                    <div className="error" style={{textAlign: 'center'}}>
                        <br />
                        <p>Error!</p>
                        <p>Status: {error}</p>
                    </div>
                }
            </>
        )
    }
} 

Tax.contextType = TransactionsContext;