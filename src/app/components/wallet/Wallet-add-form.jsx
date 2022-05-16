import PropTypes from 'prop-types';
import React from 'react';
import Modal from '../modal/Modal';

import './css/wallet-add-form.css';

class WalletAddForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            apiKey: 'ABCD-EFGH-IJKL-MNOP',
            walletSite: 'MockKryptobörs',
        }
    }
    
    handleClick = () => {
        let newWallet = {
            walletSite: this.state.walletSite,
            apiKey: this.state.apiKey
        }
        this.props.saveWallet(newWallet);
        this.props.closeModal();
    }

    render() {
        return (
            <Modal
                show={this.props.modalValue}
                closeModal={() => this.props.closeModal()}
                title={'Lägg till plånbok'}
            >
                <label>Kryptobörs<button className='read-more-button'>Läs mer</button></label> 
                <select className='add-wallet-select' value={this.state.walletSite} onChange={(e) => this.setState({walletSite: e.target.value})}>
                    <option value="MockKryptobörs">MockKryptobörs</option>
                    <option value="Binance">Binance</option>
                    <option value="Coinbase">Coinbase</option>
                    <option value="Kraken">Kraken</option>
                </select>
                <br />

                <label htmlFor="apiKey">API-nyckel<button className='read-more-button'>Läs mer</button>
                </label> 
                <input className='add-wallet-input' name='apiKey' type="text" value={this.state.apiKey} onChange={(e) => this.setState({apiKey: e.target.value})} />

                <div>
                    <button className='save-button' onClick={this.handleClick}>Lägg till plånbok</button>
                </div>
            </Modal>
        );
    }
}

WalletAddForm.propTypes = {
    saveWallet: PropTypes.func,
    closeModal: PropTypes.func,
    modalValue: PropTypes.bool
}

export default WalletAddForm;