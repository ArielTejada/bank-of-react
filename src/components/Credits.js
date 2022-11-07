/*==================================================
src/components/Credits.js

The Credits component contains information for Credits page view.
Note: You need to work on this file for the Assignment.
==================================================*/
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Styles from './styles';

class Credits extends Component {
  
  constructor (props) {  
      super(props)
      this.state = {
        accountBalance: parseFloat(this.props.balance.toFixed(2)),
        credits: this.props.credits,
        creditInput: {
          description: '',
          amount: 0,
          date: new Date().toISOString()
        },
        debitsTotal: this.props.debitsTotal,
        creditsTotal: this.props.creditsTotal
      }
    }

// add credit description
  handleDescriptionInput = (event) => {
    const newCreditInput = this.state.creditInput;
    newCreditInput.description = event.target.value;
    this.setState({creditInput: newCreditInput});
  }

// add credit amount
  handleAmountInput = (event) => {
    const newCreditAmount = this.state.creditInput;
    newCreditAmount.amount = event.target.value ;
    this.setState({creditInput: newCreditAmount});
  }

// add credit submit button
  handleAddCredit = (event) => {
    this.props.addCredit(this.state.creditInput);

    // reset credit input
    this.setState({
      creditInput: {
        description: '', 
        amount: 0, 
        date: new Date().toISOString()
    }})

    // clear input fields
    let desc = document.getElementById('descValue');
    let amount = document.getElementById('amountValue');
    desc.value = '';
    amount.value = '';
  }

  render(){

    return (
      <div style={Styles.wholePage}>

        <h1 style={Styles.title}>Credits</h1>

        <div style={Styles.categories}>
          <h2 style={{width: '50%', margin: 'auto', outline: '1px solid black', flexGrow: '1', textAlign: 'center'}}>Description</h2>
          <h2 style={{width: '30%', margin: 'auto', outline: '1px solid black', flexGrow: '1', textAlign: 'center'}}>Date</h2>
          <h2 style={{width: '20%', margin: 'auto', outline: '1px solid black', flexGrow: '1', textAlign: 'center'}}>Amount</h2>
        </div>

        <div>
          {this.props.credits.map ((credit , index) =>
            <div key={index} style={{display: 'flex'}}>
              <p style={{width: '50%', outline: '1px solid black'}}>{credit.description}</p>  
              <p style={{width: '30%', outline: '1px solid black'}}>{credit.date.slice(0, 10)}</p>
              <p style={{width: '20%', outline: '1px solid black'}}>${credit.amount} </p>
            </div>)  
          }  

          <h2>Total Debits: {this.props.debitsTotal}</h2>
          <h2>Total Credits: {this.props.creditsTotal}</h2>
          <h2>Balance = (Debits - Credits)</h2>
          <h2>Your Current Balance: {this.props.balance}</h2>

        </div>
      
        <div>
          <br/>

          <div>
            <h1 style={{outline: '1px solid black', textAlign: 'center'}}>Add A Credit</h1>
            <div style={{display: 'flex'}}>
              <h2 style={{width: '50%', paddingLeft: '5%'}}>Description</h2>
              <h2 style={{width: '50%', paddingLeft: '5%'}}>amount</h2>
            </div>
            <div style={{display: 'flex'}}>
              <input 
                id="descValue"
                type="text" 
                placeholder='add description...' 
                style={{width: '50%', marginLeft: '3%'}}
                onChange={this.handleDescriptionInput}/>
              <input 
                id="amountValue"
                type="number" 
                placeholder='add amount...' 
                style={{width: '20%'}}
                onChange={this.handleAmountInput}/>
              <button 
                type="submit" 
                style={{width: '20%'}}
                onClick={this.handleAddCredit}
              >Add Credit</button>
            </div>
          </div>

          <br/>

        </div>
    <br/>
      <Link to="/" onClick={this.handleBackToHome}>Return to Home</Link>
    </div>
    );
  }
}

export default Credits;