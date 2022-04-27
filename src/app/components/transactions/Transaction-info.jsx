import React from 'react';

import TransactionServices from '../../services/transaction-services.js';
import TransactionHistory from './Transaction-history.jsx';
import TransactionLabel from './Transaction-label.jsx';
import './transaction-info.css';

class TransactionInfo extends React.Component {
    constructor(props) {
        super(props);

        let tS = new TransactionServices();
        this.state = {
            date: '',
            cNameBought: '',
            sumBought: '',
            cNameSold: '',
            sumSold: '',
            transactions: tS.getTransactions()
        };
    }
  
    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
      }
  
    handleSubmit = (event) => {
        event.preventDefault();

        let currentTransaction = {
            'date': this.state.date,
            'cNameBought': this.state.cNameBought, 
            'sumBought':  this.state.sumBought, 
            'cNameSold': this.state.cNameSold,
            'sumSold': this.state.sumSold
        };

        let tS = new TransactionServices();
        tS.saveTransaction(currentTransaction);

        this.setState({
            transactions: tS.getTransactions(),
        })
    }

    render() {
      return (
          <>
            <TransactionHistory transactions={this.state.transactions}/>
            <form className='transaction-form' name="transaction-form" onSubmit={this.handleSubmit}>
                <h2>Lägg till transaktion</h2>
                    <TransactionLabel
                        title="Datum på transaktionen:"
                        name="date" 
                        type="datetime-local"
                        value={this.state.date}
                        onChange={this.handleInputChange}
                    />
                    <TransactionLabel
                        title="Valuta köpt:"
                        name="cNameBought" 
                        type="text"
                        value={this.state.cNameBought}
                        onChange={this.handleInputChange}
                    />
                    <TransactionLabel
                        title="Antal:"
                        name="sumBought" 
                        type="text"
                        value={this.state.sumBought}
                        onChange={this.handleInputChange}
                    />
                    <TransactionLabel
                        title="Valuta såld:"
                        name="cNameSold" 
                        type="text"
                        value={this.state.cNameSold}
                        onChange={this.handleInputChange}
                    />
                    <TransactionLabel
                        title="Summa:"
                        name="sumSold" 
                        type="text"
                        value={this.state.sumSold}
                        onChange={this.handleInputChange}
                    />
                    <input type="submit" value="Spara"/>
            </form>
        </>
      );
    }
  }

export default TransactionInfo;
