import React from 'react';

import './wallet-add-form.css';

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
        this.props.closeAddWallet()
    }

    render() {
        return (
            <div className='wallet-add-form-background'>
                <div className='wallet-add-form-container'>
                    <div className='wallet-add-form-close'>
                        <button onClick={() => this.props.closeAddWallet()}> X </button>
                    </div>

                    <h1>Lägg till plånbok</h1>

                    <label >Välj vilken kryptobörs du vill hämta din historik ifrån<button className='read-more-button'>Läs mer</button></label> 
                    <select value={this.state.walletSite} onChange={(e) => this.setState({walletSite: e.target.value})}>
                        <option value="MockKryptobörs">MockKryptobörs</option>
                        <option value="Binance">Binance</option>
                        <option value="Coinbase">Coinbase</option>
                        <option value="Kraken">Kraken</option>
                    </select>
                    <br />

                    <label htmlFor="apiKey">Här ska din api-nyckel registreras<button className='read-more-button'>Läs mer</button>
                    </label> 
                    <input name='apiKey' type="text" value={this.state.apiKey} onChange={(e) => this.setState({apiKey: e.target.value})} />

                    <p>Inputfältet för API-nyckeln kommer inte användas på "riktigt" i den här prototypen, datan kommer bara att sparas lokalt. 
                        Välj Mock-Kryptobörs och klicka på knappen "Lägg till plånbok" för att hämta hem transaktionshistorik från ett mockat api</p>
                    <div>
                        <button className='save-button' onClick={this.handleClick}>Lägg till plånbok</button>
                    </div>
                </div>
            </div>
        );

    }
}

export default WalletAddForm;