import React from 'react';
import WalletsService from '../../services/wallets-service';
import TransactionCard from '../transactions/Transaction-card';

class WalletTransactions extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            transactions: null
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

    render() {
        return (
            <div>
                <h1>Transaktioner för {this.props.walletSite}</h1>
                {this.state.transactions?.map((transaction) => {
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