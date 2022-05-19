import React from 'react';
import TaxService from '../../services/tax-service';
import './css/tax.css';

export default class Tax extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            walletTransactions: null,
            onClick: false,
            error: null
        }

        this.taxService = new TaxService();
    }

    componentDidMount = async () => {
        const data = await this.taxService.getTransactions();
        if (typeof data === 'string') {
            this.setState({
                error: data,
            })
        } else {
            this.setState({
                walletTransactions: data,
            })
        }
    }

    render() {
        let transactions = this.state.walletTransactions;
        let error = this.state.error;
        let countedTransactions;
        if (Array.isArray(transactions) && this.state.error === null) {
            countedTransactions = this.taxService.countTaxes(transactions); // Hämtar ny array av transaktionerna och lägger till nödvändiga delar som ska läggas till i en k4a
        }

        let numberFormat = Intl.NumberFormat();

        return (
            <>
                <h2 className='tax-title'>Skatterapport</h2>

                <div className='tax-open-button-div'>
                    <button className='open-button' onClick={() => { this.setState({ onClick: !this.state.onClick }) }}>Generera skatterapport</button>
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
                                        return (
                                            <tr key={transaction.id} className='tr-body'>
                                                <td>{transaction.date}</td>
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
                    <div className="error">
                        <p>Kan inte hämta transaktionerna!</p>
                        <p>Status: {error}</p>
                    </div>
                }
            </>
        )
    }
} 