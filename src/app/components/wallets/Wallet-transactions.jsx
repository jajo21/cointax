import React from 'react';
import WalletsService from '../../services/wallets-service';
import { Link } from 'react-router-dom';

import './wallet-transactions.css';

class WalletTransactions extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            transactions: null,
            transactionInput: '',
        }

        this.walletsService = new WalletsService();
    }

    componentDidMount = async() => {
        let wallet = await this.walletsService.getWallet(this.props.walletSite);
        let transactions = await this.walletsService.getWalletTransactions(wallet.apiURL);
        this.setState({
            transactions
        });
    }

    filterTransactions = (allTransactions) => {
        return allTransactions.filter((transaction) => {
            return transaction.cNameBought.toLowerCase().indexOf(this.state.transactionInput.toLowerCase()) >= 0;
        });
    }

    render() {
        const transactions = this.filterTransactions(this.state.transactions || []);
        return (
            <div className='wallet-transactions-content'>
                <h2>Transaktionshistorik från {this.props.walletSite}</h2>

                <div className='wallet-transactions-buttons'>
                    <button className='connect-button'>Koppla ihop hämtade transaktioner med manuella</button>
                    <Link to="/wallet"><button className='go-back-button'>Gå tillbaka till Plånbok</button></Link>
                </div>

                <div className='search-bar'>
                    <label htmlFor="search-bar">Sök efter köpta valutor <br />
                        <input name="search-bar" placeholder='EX: BTC' type="text" onChange={(e) => this.setState({transactionInput: e.target.value})}/>
                    </label>
                </div>

                <div className='wallet-transactions'>
                    {transactions?.map((transaction) => {
                        return (                       
                            <div key={transaction.id} className='wallet-transaction'>
                                <p>{transaction.date}</p>
                                <p>{`Köpt ${transaction.cNameBought}: ${transaction.sumBought}`}</p>
                                <p>{`Sålt ${transaction.cNameSold}: ${transaction.sumSold}`}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        );

    }
}

export default WalletTransactions;