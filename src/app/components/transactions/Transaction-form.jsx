import React from 'react';

/* import TransactionServices from '../../services/transaction-services.js'; */
import TransactionHistory from './Transaction-history.jsx';
import './Transaction-form.css';

class TransactionForm extends React.Component {
    constructor() {
      super();
      this.state = {
          date: '',
          cNameBought: '',
          sumBought: '',
          cNameSold: '',
          sumSold: '',
          transactions: [],
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

        let currentTransactions = this.state.transactions;
        currentTransactions.push({
            'id': currentTransactions.length+1,
            'date': this.state.date,
            'cNameBought': this.state.cNameBought, 
            'sumBought':  this.state.sumBought, 
            'cNameSold': this.state.cNameSold,
            'sumSold': this.state.sumSold
        })

/*         let tS = new TransactionServices();
        tS.saveTransaction(currentTransactions); */

        this.setState({
            transactions: currentTransactions,
        })

        console.log(this.state.transactions);
    }
  
    render() {
      return (
          <>
            <form className='transaction-form' name="transaction-form" onSubmit={this.handleSubmit}>
                <label>
                    Datum på transaktionen:<br/>
                    <input 
                        name="date" 
                        type="datetime-local"
                        value={this.state.date}
                        onChange={this.handleInputChange}
                        required/>
                </label>
                <label>
                    Valuta köpt:<br/>
                    <input 
                        name="cNameBought" 
                        type="text"
                        value={this.state.cNameBought}
                        onChange={this.handleInputChange}
                        required/>
                </label>
                <label>
                    Summa:<br/>
                    <input 
                        name="sumBought" 
                        type="text"
                        value={this.state.sumBought}
                        onChange={this.handleInputChange}
                        required/>
                </label>
                <label>
                    Valuta såld:<br/>
                    <input 
                        name="cNameSold" 
                        type="text"
                        value={this.state.cNameSold}
                        onChange={this.handleInputChange}
                        required/>
                </label>
                <label>
                    Summa:<br/>
                    <input 
                        name="sumSold" 
                        type="text"
                        value={this.state.sumSold}
                        onChange={this.handleInputChange}
                        required/>
                </label>

                <input type="submit" value="Spara"/>
            </form>
            <TransactionHistory transactions={this.state.transactions}/>
        </>
      );
    }
  }

export default TransactionForm;
