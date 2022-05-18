import React from 'react';
import PropTypes from 'prop-types';
import CoinsApiCaller from '../../api-callers/coins-api-caller.js';
import './admin-add-currency-form.css';

class AdminAddCurrencyForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            error: null,
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
        const data = await this.coinsCaller.postCurrency(this.state.currencyName, this.state.currencySymbol, this.state.currencyType);
        if (typeof data === 'string') {
            this.setState({
                error: data
            })
        } else {
            this.props.updateCurrencies();
        }
    }

    render() {
        return (
            <form className='currency-add-form' onSubmit={this.handleSubmit}>

                {this.state.error &&
                    <div className="error" style={{ textAlign: 'center' }}>
                        <p>Något gick fel...</p>
                        <p>Valutan är inte sparad!</p>
                        <p>Status: {this.state.error}</p>
                    </div>
                }

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
        );
    }
}

AdminAddCurrencyForm.propTypes = {
    updateCurrencies: PropTypes.func,
}

export default AdminAddCurrencyForm;