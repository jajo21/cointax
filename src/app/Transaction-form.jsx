import React from 'react';

class TransactionForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          date: '',
          cBought: '',
          sumBought: '',
          cSold: '',
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
        alert(
            'date: ' + this.state.date +
            ' cBought: ' + this.state.cBought +
            ' sumBought: ' + this.state.sumBought +
            ' cSold: ' + this.state.cSold +
            ' sumSold: ' + this.state.sumSold
        );
        event.preventDefault();
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
                    onChange={this.handleInputChange} />
            </label>
            <label>
                Valuta köpt:
                <input 
                    name="cBought" 
                    type="text"
                    value={this.state.cBought}
                    onChange={this.handleInputChange}/>
            </label>
            <label>
                Summa:
                <input 
                    name="sumBought" 
                    type="text"
                    value={this.state.sumBought}
                    onChange={this.handleInputChange} />
            </label>
            <label>
                Valuta såld:
                <input 
                    name="cSold" 
                    type="text"
                    value={this.state.cSold}
                    onChange={this.handleInputChange}/>
            </label>
            <label>
                Summa:
                <input 
                    name="sumSold" 
                    type="text"
                    value={this.state.sumSold}
                    onChange={this.handleInputChange} />
            </label>

            <input type="submit" value="Submit" />
        </form>
      );
    }
  }

export default TransactionForm;
