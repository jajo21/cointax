import React from 'react';

import TransactionServices from './services/transaction-services.js';

class TransactionForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          date: '',
          cNameBought: '',
          sumBought: '',
          cNameSold: '',
          sumSold: '',
        };
  
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }
  
    handleSubmit(event) {
        event.preventDefault();

        let tS = new TransactionServices();
        let currentTransactions = tS.checkLocalStorage();
        if(currentTransactions === null) {
            currentTransactions = [];
        }

        currentTransactions.push({
            'date': this.state.date,
            'cNameBought': this.state.cNameBought, 
            'sumBought':  this.state.sumBought, 
            'cNameSold': this.state.cNameSold,
            'sumSold': this.state.sumSold
        })

        tS.saveTransaction(currentTransactions);

        console.log('localstorage', tS.checkLocalStorage());

    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <label>
                Var god välj datum på transaktionen:
                <input 
                    name="date" 
                    type="datetime-local"
                    value={this.state.date}
                    onChange={this.handleInputChange}/>
            </label>
            <label>
                Valuta köpt:
                <input 
                    name="cNameBought" 
                    type="text"
                    value={this.state.cNameBought}
                    onChange={this.handleInputChange}/>
            </label>
            <label>
                Summa:
                <input 
                    name="sumBought" 
                    type="text"
                    value={this.state.sumBought}
                    onChange={this.handleInputChange}/>
            </label>
            <label>
                Valuta såld:
                <input 
                    name="cNameSold" 
                    type="text"
                    value={this.state.cNameSold}
                    onChange={this.handleInputChange}/>
            </label>
            <label>
                Summa:
                <input 
                    name="sumSold" 
                    type="text"
                    value={this.state.sumSold}
                    onChange={this.handleInputChange}/>
            </label>

            <input type="submit" value="Spara"/>
        </form>
      );
    }
  }

export default TransactionForm;
