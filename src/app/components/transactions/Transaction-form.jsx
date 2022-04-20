import React from 'react';

/* import TransactionServices from './services/transaction-services.js'; */
import TransactionHistory from './Transaction-history.jsx';

class TransactionForm extends React.Component {
    constructor(props) {
      super(props);
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

/*         if(documents.forms['transaction-form'][[name]].value == '') {
            alert([name] + ' must be filled out');  
        } */
    
        this.setState({
            [name]: value
        });
      }
  
    handleSubmit(event) {
        event.preventDefault();

/*         let tS = new TransactionServices();
        let currentTransactions = tS.checkLocalStorage(); */

        let currentTransactions = this.state.transactions;
        currentTransactions.push({
            'id': currentTransactions.length+1,
            'date': this.state.date,
            'cNameBought': this.state.cNameBought, 
            'sumBought':  this.state.sumBought, 
            'cNameSold': this.state.cNameSold,
            'sumSold': this.state.sumSold
        })

        this.setState({
            transactions: currentTransactions,
        })

        console.log(this.state.transactions);
    }
  
    render() {
      return (
          <>
            <form name="transaction-form" onSubmit={this.handleSubmit}>
                <label>
                    Var god välj datum på transaktionen:
                    <input 
                        name="date" 
                        type="datetime-local"
                        value={this.state.date}
                        onChange={this.handleInputChange}
                        required/>
                </label>
                <label>
                    Valuta köpt:
                    <input 
                        name="cNameBought" 
                        type="text"
                        value={this.state.cNameBought}
                        onChange={this.handleInputChange}
                        required/>
                </label>
                <label>
                    Summa:
                    <input 
                        name="sumBought" 
                        type="text"
                        value={this.state.sumBought}
                        onChange={this.handleInputChange}
                        required/>
                </label>
                <label>
                    Valuta såld:
                    <input 
                        name="cNameSold" 
                        type="text"
                        value={this.state.cNameSold}
                        onChange={this.handleInputChange}
                        required/>
                </label>
                <label>
                    Summa:
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
