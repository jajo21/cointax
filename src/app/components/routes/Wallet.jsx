import React from 'react';
import WalletsService from '../../services/wallets-service';
import AddWalletForm from '../wallets/Add-wallet-form';
import WalletTransactions from './Wallet-transactions';
import { Link } from 'react-router-dom';

export default class Wallet extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            onClickAddWallet: false,
            onClickCheckTransactions: false,
            wallets: [],
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
                            <Link to={'transactions/' + wallet.walletSite}>
                                <button>Kolla hämtade transaktioner</button>
                            </Link>
                        </div>
                    )
                })}

            </>
        )
    }
} 
