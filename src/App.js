/*==================================================
src/App.js

This is the top-level component of the app.
It contains the top-level state.

https://ArielTejada.github.io/bank-of-react/
==================================================*/
import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

// Import other components
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/Login';
import Credits from './components/Credits';
import Debits from './components/Debits';
import axios from 'axios';
import AccountBalance from './components/AccountBalance';

class App extends Component {
  constructor() {  // Create and initialize state
    super(); 
    this.state = {
      accountBalance: 0,
      credits: [],
      debits: [],
      creditsTotal: 0,
      debitsTotal: 0,
      currentUser: {
        userName: 'Joe Smith',
        memberSince: '11/22/99',
      },
      date: ''
    }
  }

  // Update state's currentUser (userName) after "Log In" button is clicked
  mockLogIn = (logInInfo) => {  
    const newUser = {...this.state.currentUser}
    newUser.userName = logInInfo.userName
    this.setState({currentUser: newUser})
  }

  addCredit = (credit) => {
    let newCredits = this.state.credits;
    newCredits.push(credit);
    this.setState({credits: newCredits});
    let newAccountBalance = this.state.accountBalance;
    newAccountBalance += credit.amount;
    this.setState({accountBalance: newAccountBalance});
  }

  addDebit = () => {
    
  }

  sumCredits = () => {
    let sumCredits = 0.0;
    this.state.credits.forEach((credit) => sumCredits += credit.amount);
    this.setState({creditsTotal: sumCredits})
    this.setState({accountBalance: this.state.accountBalance + sumCredits})
  }

  sumDebits = () => {
    let sumDebits = 0.0;
    this.state.debits.forEach((debit) => sumDebits += debit.amount);
    this.setState({debitsTotal: sumDebits});
    this.setState({accountBalance: this.state.accountBalance - sumDebits})
  }

  async componentDidMount() {
    let creditsAPI = 'https://moj-api.herokuapp.com/credits';  
    try { 
      let credits_response = await axios.get(creditsAPI);
      console.log(credits_response);  
      this.setState({credits: credits_response.data}); 
      this.setState({date: new Date().toISOString()})
      this.sumCredits();
      } 
      catch (error) {  
        if (error.credits_response) {
          console.log(error.credits_response.data);  
          console.log(error.credits_response.status);  
        }    
    }
  }  

  async componentDidMount() { 
    let debitsAPI = 'https://moj-api.herokuapp.com/debits'
    try { 
      let debits_response = await axios.get(debitsAPI);
      console.log(debits_response);  
      this.setState({debits: debits_response.data}); 
      this.setState({date: new Date().toISOString()})
      this.sumDebits();
      } 
      catch (error) {  
        if (error.debits_response) {
          console.log(error.debits_response.data); 
          console.log(error.debits_response.status);  
        }      
    }
  }  

  render() {  

    // let total = this.state.creditsTotal - this.state.debitsTotal;
    // this.setState({accountBalance: total.toFixed(2)})

    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance} />);
    const UserProfileComponent = () => (
      <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince} />
    );
    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} />)
    
    const DebitsComponent = () => (
      <Debits 
        debits={this.state.debits} 
        creditsTotal={this.state.creditsTotal} 
        debitsTotal={this.state.creditsTotal} 
        addDebit={this.addDebit} 
        balance={this.state.accountBalance} updateAccountBalance={this.updateAccountBalance} />) 

    const CreditsComponent = () => (
      <Credits 
        credits={this.state.credits} 
        creditsTotal={this.state.creditsTotal} 
        debitsTotal={this.state.creditsTotal} 
        addCredit={this.addCredit} 
        balance={this.state.accountBalance} updateAccountBalance={this.updateAccountBalance} />)

    return (
      <Router basename="/bank-of-react">
        <div>
          <Route exact path="/" render={HomeComponent}/>
          <Route exact path="/userProfile" render={UserProfileComponent}/>
          <Route exact path="/login" render={LogInComponent}/>
          <Route exact path="/credits" render={CreditsComponent}/>
          <Route exact path="/debits" render={DebitsComponent}/>
        </div>
      </Router>
    );
  }
}

export default App;