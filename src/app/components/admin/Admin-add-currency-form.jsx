import React from 'react';
import CoinsService from '../../services/api/coins-service';

class AdminAddCurrencyForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            currencyName: '',
            currencySymbol: '',
            currencyType: 'crypto',
        }

        this.coinsService = new CoinsService();
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        await this.coinsService.postCurrency(this.state.currencyName, this.state.currencySymbol, this.state.currencyType);
        this.props.closeForm();
    }

    render() {
        return (
            <div>
                <h2>Lägg till valuta</h2>
                <form onSubmit={this.handleSubmit}>

                    <label>Namn på valutan <br />
                    <input type="text" name="currencyName" placeholder='EX: Svensk krona' value={this.state.currencyName} onChange={this.handleChange} />
                    </label>

                    <label>Förkortning/symbol på valutan <br />
                    <input type="text" name="currencySymbol" placeholder='EX: SEK' value={this.state.currencySymbol} onChange={this.handleChange} />
                    </label>

                    <label >Typ av valuta <br />
                        <select name="currencyType" value={this.state.currencyType} onChange={this.handleChange}>
                            <option value="crypto">crypto</option>
                            <option value="fiat">fiat</option>
                        </select>
                    </label>

                    <button type='submit'>Spara valuta</button>
                </form>

            </div>
        );
    }
}

export default AdminAddCurrencyForm;