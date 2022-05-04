import React from 'react';

import CoinsService from '../../services/api/coins-service';
import AdminAddCurrencyForm from '../admin/Admin-add-currency-form';

export default class Admin extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currencies: null,
            onClickAdd: false,
        }

        this.coinsService = new CoinsService();
    }

    componentDidMount = async() => {
        this.setState({
            currencies: await this.coinsService.getCurrencies(),
        })
    }

    handleOnClickAddCurr = async() => {
        this.setState({
            onClickAdd: !this.state.onClickAdd,
            currencies: await this.coinsService.getCurrencies(),
        });
    }

    render() {
        const currencies = this.state.currencies || [];
        console.log(currencies);
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
                                <br />
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
