import React from 'react';
import TaxService from '../../services/tax-service';
/* 
---------------------------------------------------

DEN HÄR KLASSEN ÄR INTE FÄRDIG, DEN JOBBAS ÄNNU PÅ

---------------------------------------------------
 */
export default class Tax extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            walletTransactions: [],
            onClick: false,
        }

        this.taxService = new TaxService();
    }

    componentDidMount = async () => {
        this.setState({
            walletTransactions: await this.taxService.getTransactions()
        })
    }

    render() {
        let transactions = this.state.walletTransactions;
        let countedTransactions = this.taxService.makeTaxes(transactions);
        console.log({ countedTransactions });

        return (
            <>
                <h2>Skatterapport</h2>

                <button onClick={() => {this.setState({onClick: !this.state.onClick})}}>Generera skatterapport</button>
                {this.state.onClick &&
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
                                if(transaction.hasOwnProperty('winOrLossOnSell')) {
                                    return(
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
            </>
        )
    }
} 