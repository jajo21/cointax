import React from 'react';

class AddWalletForm extends React.Component {
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
    }

    render() {
        return (
            <div>
                <h1>Lägg till plånbok</h1>

                <label htmlFor="walletSite">Välj vilken kryptobörs du vill hämta din historik ifrån<button>Läs mer</button>
                </label> 
                <br />

                <select value={this.state.walletSite} onChange={(e) => this.setState({walletSite: e.target.value})}>
                    <option value="MockKryptobörs">MockKryptobörs</option>
                    <option value="Binance">Binance</option>
                    <option value="Coinbase">Coinbase</option>
                    <option value="Kraken">Kraken</option>
                </select>
                <br />

                <label htmlFor="apiKey">Här ska din api-nyckel registreras<button>Läs mer</button>
                </label> 
                <br />
                <input name='apiKey' type="text" value={this.state.apiKey} onChange={(e) => this.setState({apiKey: e.target.value})} />
                <br />

                <p>Inputfältet för API-nyckeln kommer inte används på "riktigt" i den här prototypen, datan kommer bara att sparas lokalt. 
                    Välj Mock-Kryptobörs och klicka på knappen "Lägg till plånbok" för att hämta hem transaktionshistorik från ett mockat api</p>

                <button onClick={this.handleClick}>Lägg till plånbok</button>
            </div>
        );

    }
}

export default AddWalletForm;