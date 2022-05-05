import React from 'react';
import CoinsApiCaller from '../../services/api/coins-api-caller';
import './admin-add-currency-form.css';

class AdminAddCurrencyForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            currencyName: '',
            currencySymbol: '',
            currencyType: 'crypto',
        }

        this.coinsCaller = new CoinsApiCaller();
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        await this.coinsCaller.postCurrency(this.state.currencyName, this.state.currencySymbol, this.state.currencyType);
        this.props.closeForm();
    }

    render() {
        return (
            <div className='currency-add-form-background'>
                <div className='currency-add-form-container'>
                    <div className='currency-add-form-close-div'>
                        <button onClick={() => {this.props.closeForm()}}> X </button>
                    </div>
                    <div className='currency-add-form-title'>
                        <h2>Lägg till valuta</h2>
                    </div>
                    <form className='currency-add-form' onSubmit={this.handleSubmit}>

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

                        <button className='save-button' type='submit'>Spara valuta</button>
                    </form>

                </div>
            </div>
        );
    }
}

export default AdminAddCurrencyForm;