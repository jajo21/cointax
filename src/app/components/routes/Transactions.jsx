import React from 'react';
import TransactionForm from '../transactions/Transaction-form.jsx';
import TransactionHistory from '../transactions/Transaction-history.jsx';
import CoinsApiCaller from '../../api-callers/coins-api-caller';
import TransactionsContext from '../../contexts/TransactionsContext.js';
import './css/transactions.css';

export default class Transactions extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            coins: [],
            isOpen: false,
        }

        this.coinsCaller = new CoinsApiCaller();
    }

    componentDidMount = async () => {
        this.setState({
            coins: await this.coinsCaller.getCurrencies(),
        })
    }

    toggleModalOnClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {

        return (
            <>
                <TransactionHistory/>

                <div className='add-transaction-button-div'>
                    <button
                        className='add-transaction-button'
                        onClick={this.handleAddTransactionOnClick}
                        >Lägg till transaktion
                    </button>
                </div>

                <TransactionForm 
                    onClose={this.toggleModalOnClick}
                    open={this.state.isOpen}
                    coins={this.state.coins}
                />

            </>
        )
    }
} 

Transactions.contextType = TransactionsContext;