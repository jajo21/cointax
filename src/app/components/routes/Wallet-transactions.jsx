import React from 'react';
import WalletsService from '../../services/wallets-service';
import TransactionCard from '../transactions/Transaction-card';

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
            <div>
                <h1>Transaktioner för {this.props.walletSite}</h1>
                <label htmlFor="search-bar">Sök efter köpta valutor</label>
                <input name="search-bar" placeholder='EX: BTC' type="text" onChange={(e) => this.setState({transactionInput: e.target.value})}/>
                {transactions?.map((transaction) => {
                    return (
                        <TransactionCard 
                        key={transaction.id} 
                        transaction={transaction}
                        onDelete={() => {}} />
                    )
                })

                }
            </div>
        );

    }
}

export default WalletTransactions;