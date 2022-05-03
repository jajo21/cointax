import React from 'react';
import WalletsService from '../../services/wallets-service';
import AddWalletForm from '../wallets/Add-wallet-form';
import WalletTransactions from './Wallet-transactions';

export default class Wallet extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            onClickAddWallet: false,
            onClickCheckTransactions: false,
            wallets: [],
            wallet: {}
        }

        this.walletsService = new WalletsService();
    }

    componentDidMount = () => {
        this.setState({
            wallets: this.walletsService.getWallets()
        })
    }

    handleOnClickAddWallet = () => {
        this.setState({
            onClickAddWallet: !this.state.onClickAddWallet,
        });
    }

    handleSaveWallet = (wallet) => {
        this.walletsService.saveWallet(wallet);

        this.setState({
            wallets: this.walletsService.getWallets()
        })
    }

    handleOnClickTransactions = (id) => {
        this.setState({
            onClickCheckTransactions: !this.state.onClickCheckTransactions,
            wallet: this.walletsService.getWallet(id),
        });
    }


    render() {
        const wallets = this.state.wallets;
        return (
            <>
                <h2>Plånbok</h2>
                <button onClick={this.handleOnClickAddWallet}>Lägg till plånbok</button>
                {this.state.onClickAddWallet &&
                    <AddWalletForm saveWallet={this.handleSaveWallet}/>
                }

                {wallets?.map(wallet => {
                    console.log(wallet);
                    return(
                        <div key={wallet.id}>
                            <h2>{wallet.walletSite}</h2>
                            <button onClick={() => this.handleOnClickTransactions(wallet.id)}>Kolla hämtade transaktioner</button>
                        </div>
                    )
                })}

                {this.state.onClickCheckTransactions &&
                    <WalletTransactions wallet={this.state.wallet}/>
                }

            </>
        )
    }
} 
