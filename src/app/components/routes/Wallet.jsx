import React from 'react';
import WalletsService from '../../services/wallets-service';
import WalletAddForm from '../wallet/Wallet-add-form';
import { Link } from 'react-router-dom';

import './css/wallet.css'

export default class Wallet extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            onClickAddWallet: false,
            onClickCheckTransactions: false,
            wallets: null,
        }

        this.walletsService = new WalletsService();
    }

    componentDidMount = async () => {
        this.setState({
            wallets: await this.walletsService.getWallets()
        })
    }

    handleOnClickAddWallet = () => {
        this.setState({
            onClickAddWallet: !this.state.onClickAddWallet,
        });
    }

    handleSaveWallet = async (wallet) => {
        this.setState({
            wallets: await this.walletsService.saveWallet(wallet)
        })
    }

    handleDeleteWallet = async(id) => {

        this.setState({
            wallets: await this.walletsService.deleteWallet(id)
        })
    }


    render() {
        const wallets = this.state.wallets;
        return (
            <>
                <h2>Plånbok</h2>
                <div className='add-wallet-div'>
                    <button className='open-button' onClick={this.handleOnClickAddWallet}>Lägg till plånbok</button>
                    {this.state.onClickAddWallet &&
                        <WalletAddForm saveWallet={this.handleSaveWallet} closeAddWallet={this.handleOnClickAddWallet}/>
                    }
                </div>
                
                <div className='wallets-connected'>
                    <h2>Kopplade plånböcker från kryptobörser</h2>
                    {wallets?.map(wallet => {
                        return(
                            <div className='wallets-div' key={wallet.id}>
                                <h2>{wallet.walletSite}</h2>
                                <Link to={wallet.walletSite}>
                                    <button className='open-button'>Kolla hämtade transaktioner</button>
                                </Link>
                                    <button className='delete-button' onClick={() => this.handleDeleteWallet(wallet.id)}>Ta bort plånbok</button>
                            </div>
                        )
                    })}
                </div>
            </>
        )
    }
} 
