import React from 'react';

import CoinsApiCaller from '../../api-callers/coins-api-caller.js';
import AdminAddCurrencyForm from '../admin/Admin-add-currency-form';
import Modal from '../modal/Modal.jsx';
import './css/admin.css';

export default class Admin extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currencies: null,
            error: null,
            isPending: true,
        }

        this.coinsCaller = new CoinsApiCaller();
    }

    componentDidMount = async () => {
        const [data, error] = await this.coinsCaller.getCurrencies()
        if (data !== null) {
            this.setState({
                currencies: data,
                isPending: false
            })
        } else {
            this.setState({
                error: error,
                isPending: false
            })
        }
    }

    handleUpdateCurrencies = async () => {
        const [data, error] = await this.coinsCaller.getCurrencies()
        if (data !== null) {
            this.setState({
                currencies: data,
                isPending: false
            })
        } else {
            this.setState({
                error: error,
                isPending: false
            })
        }
        this.modal.setModal(false);
    }

    handleDeleteCurrency = async (id) => {
        const [data, error] = await this.coinsCaller.deleteCurrency(id);
        if (data !== null) {
            this.setState({
                currencies: data,
            })
        } else {
            this.setState({
                error: error,
            })
        }
    }

    render() {
        let currencies = this.state.currencies;
        let error = this.state.error;
        return (
            <div className='admin-route'>
                <h2>Admin</h2>
                <div className='admin-info'>
                    <p>Det här är en tillfällig adminsida som alla har tillgång till!</p>
                    <p>Lägg till och ta bort tillgängliga valutor som används vid manuell inmatning av transaktioner.</p>
                </div>

                <div className='add-currency-div'>
                    <button className='main-button' onClick={() => { this.modal.setModal(true) }}>Lägg till valuta</button>
                </div>
                <Modal
                    title={'Lägg till valuta'}
                    onMount={modal => this.modal = modal}
                >
                    <AdminAddCurrencyForm
                        updateCurrencies={this.handleUpdateCurrencies}
                    />
                </Modal>

                <h3>Nuvarande valutor</h3>
                <div className='currencies'>
                    {currencies && currencies.map((currency) => {
                        return (
                            <div key={currency.id} className='currency'>
                                <h4>Namn: {currency.name}</h4>
                                <p>Symbol: {currency.symbol}</p>
                                <p>Valuta-typ: {currency.currencyType}</p>
                                <div>
                                    <button className='delete-button' onClick={() => this.handleDeleteCurrency(currency.id)}>Ta bort valuta</button>
                                </div>
                            </div>
                        )
                    })}
                    {this.state.isPending &&
                        <div style={{textAlign: 'center'}}>LADDAR...</div>
                    }
                    {error &&
                        <div className="error" style={{textAlign: 'center'}}>
                            <p>{error.message}</p>
                            <p>Status: {error.status}</p>
                        </div>
                    }
                </div>
            </div>
        )
    }
} 
