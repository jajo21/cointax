import React from 'react';

import TransactionServices from '../../services/transaction-services.js';
import TransactionHistory from './Transaction-history.jsx';
import TransactionLabel from './Transaction-label.jsx';
import './transaction-info.css';

class TransactionInfo extends React.Component {
    constructor(props) {
        super(props);

        let tS = new TransactionServices();
        let currentTransactions = tS.checkLocalStorage();
        if(currentTransactions === null) currentTransactions = [];
        this.state = {
            date: '',
            cNameBought: '',
            sumBought: '',
            cNameSold: '',
            sumSold: '',
            transactions: currentTransactions
        };
    }
  
    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
            [name]: value
        });
      }
  
    handleSubmit = (event) => {
        event.preventDefault();

        let currentTransactions = this.state.transactions.slice();
        currentTransactions.push({
            'id': currentTransactions.length+1,
            'date': this.state.date,
            'cNameBought': this.state.cNameBought, 
            'sumBought':  this.state.sumBought, 
            'cNameSold': this.state.cNameSold,
            'sumSold': this.state.sumSold
        })

        let tS = new TransactionServices();
        tS.saveTransaction(currentTransactions);

        this.setState({
            transactions: currentTransactions
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
