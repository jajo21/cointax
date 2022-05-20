import React from 'react';
import { Link } from 'react-router-dom';
import WalletsService from '../../services/wallets-service';
import WalletAddForm from '../wallet/Wallet-add-form';
import Modal from '../modal/Modal';

import './css/wallet.css'

export default class Wallet extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
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

    handleSaveWallet = async (wallet) => {
        this.setState({
            wallets: await this.walletsService.saveWallet(wallet)
        })
        this.modal.setModal(false)
    }

    handleDeleteWallet = async (id) => {
        this.setState({
            wallets: await this.walletsService.deleteWallet(id)
        })
    }


    render() {
        const wallets = this.state.wallets;
        return (
            <div className='wallet-container'>
                <h2>Hantera dina plånböcker från kryptobörser</h2>
                <div className='add-wallet-div'>
                    <div className='add-wallet-button-div'>
                        <button
                            className='open-button'
                            onClick={() => this.modal.setModal(true)}
                        >Lägg till plånbok
                        </button>
                    </div>

                    <Modal
                        title={'Lägg till plånbok'}
                        onMount={(modal) => {this.modal = modal}}
                    >
                        <WalletAddForm
                            saveWallet={this.handleSaveWallet}
                        />
                    </Modal>
                </div>

                <div className='wallets-connected'>
                    <h2>Dina tillagda plånböcker</h2>
                    {wallets?.map(wallet => {
                        return (
                            <div className='wallet-div' key={wallet.id}>
                                <h2>{wallet.walletSite}</h2>
                                <div className='link-button'>
                                    <Link to={wallet.walletSite}>
                                        <button className='open-button'>Kolla hämtade transaktioner</button>
                                    </Link>
                                </div>
                                <button className='delete-button' onClick={() => this.handleDeleteWallet(wallet.id)}>Ta bort plånbok</button>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
} 
