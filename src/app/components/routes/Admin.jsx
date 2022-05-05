import React from 'react';

import CoinsApiCaller from '../../services/api/coins-api-caller';
import AdminAddCurrencyForm from '../admin/Admin-add-currency-form';

export default class Admin extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currencies: null,
            onClickAdd: false,
        }

        this.coinsCaller = new CoinsApiCaller();
    }

    componentDidMount = async() => {
        this.setState({
            currencies: await this.coinsCaller.getCurrencies(),
        })
    }

    handleOnClickAddCurr = async() => {
        this.setState({
            onClickAdd: !this.state.onClickAdd,
            currencies: await this.coinsCaller.getCurrencies(),
        });
    }

    handleOnClickDeleteCurr = async(id) => {
        await this.coinsCaller.deleteCurrency(id);
        this.setState({
            currencies: await this.coinsCaller.getCurrencies(),
        });
    }

    render() {
        const currencies = this.state.currencies || [];
        console.log('hej',currencies);
        return (
            <>
                <h2>Admin</h2>
                <div className='admin-info'>
                    <p>Det här är en tillfällig adminsida som alla har tillgång till!</p>
                    <p>Den är skapad enbart för krav 10; att skicka information till ett api</p>
                </div>

                <div className='currencies'>
                    <h3>Nuvarande valutor</h3>
                    {currencies.map((currency) => {
                        return(
                            <div key={currency.id} className='currency'>
                                <h4>Namn: {currency.name}</h4>
                                <p>Symbol: {currency.symbol}</p>
                                <p>Valuta-typ: {currency.currencyType}</p>
                                <button onClick={() => this.handleOnClickDeleteCurr(currency.id)}>Ta bort valuta</button>
                                <br /> <br />
                            </div>
                        )
                    })}
                </div>

                <button onClick={this.handleOnClickAddCurr}>Lägg till valuta</button>
                {this.state.onClickAdd &&
                    <AdminAddCurrencyForm closeForm={this.handleOnClickAddCurr}/>
                }

                <br /><br />
            </>
        )
    }
} 
