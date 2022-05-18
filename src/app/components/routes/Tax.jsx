import React from 'react';
import TaxService from '../../services/tax-service';

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

        return (
            <>
                <h2>Skatterapport</h2>

                <button onClick={() => { this.setState({ onClick: !this.state.onClick }) }}>Generera skatterapport</button>
                {this.state.onClick && countedTransactions &&
                    <table>
                        <thead>
                            <tr>
                                <th>Antal</th>
                                <th>Beteckning</th>
                                <th>Försäljningspris</th>
                                <th>Omkostnadsbelopp</th>
                                <th>Vinst</th>
                                <th>Förlust</th>
                            </tr>
                        </thead>
                        <tbody>
                            {countedTransactions.map((transaction) => {
                                if (transaction.hasOwnProperty('winOrLossOnSell')) {
                                    return (
                                        <tr key={transaction.id}>
                                            <td>{transaction.sumSold}</td>
                                            <td>{transaction.cNameSold}</td>
                                            <td>{transaction.sumBought}</td>
                                            <td>{transaction.usedCostAmount}</td>
                                            <td>{(transaction.winOrLossOnSell > 0) && transaction.winOrLossOnSell}</td>
                                            <td>{(transaction.winOrLossOnSell < 0) && transaction.winOrLossOnSell}</td>
                                        </tr>
                                    )
                                }
                            })}
                        </tbody>
                    </table>
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