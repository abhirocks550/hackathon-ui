import React from 'react';
import { connect } from 'react-redux';
import NavBar from '../components/NavigationBar/NavigationBar';
import EmiCalculator from '../components/EmiCalculator/EmiCalculator';
import Login from '../components/Login/Login';
import './App.css';
import Customers from '../components/Customers/Customers';
import BankEmployee from '../components/BankEmployee/BankEmployee';
import { browserHistory } from 'react-router';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        username: '',
        password: '',
        role: '',
        errorMessage: '',
      };

  }

  updateInput = (event) => {
    let selectedUsername = event.target.value;

    this.setState({
        [event.target.name]: event.target.value,
      });
    console.log(this.state);
  };

  loginUser = (event) => {
    event.preventDefault();
    axios({
      method: 'post',
      url: 'http://10.117.189.16:8080/loan_app/loanservice/login',
      data: {
          username: this.state.username,
          password: this.state.password,
        },
    }).then((response) => {
      if (response.data.valid && response.data.role === 'CUST') {
        this.setState({
          role: 'customer',
          errorMessage: '',
        });
        localStorage.setItem('Customerstate', JSON.stringify(this.state));
        this.forceUpdate();
      } else if (response.data.valid && response.data.role === 'BANK') {
        this.setState({
          role: 'bank',
          errorMessage: '',
        });
        localStorage.setItem('Customerstate', JSON.stringify(this.state));
        this.forceUpdate();
      } else {
        this.setState({
          errorMessage: 'Username and password is incorrect',
        });
      }
    });
  };

  render() {
    let customers = null;
    if (localStorage.getItem('Customerstate') && this.state.role === 'customer') {
      customers = (
        <Customers />
      );
    } else if (localStorage.getItem('Customerstate') && this.state.role === 'bank') {
      customers = (
        <BankEmployee />
      );
    } else {
      customers = (
      <div className="container-fluid">
          <NavBar />
          <div className="row">
            <div className="col-sm-6 col-md6 emi login">
              <Login
              updateInput={this.updateInput}
              state={this.state}
              loginUser={this.loginUser}
              />
              <h3>{this.state.errorMessage}</h3>
            </div>
             <div className="col-sm-5 col-md-5 emi">
              <h2>Emi Calculator</h2>
              <EmiCalculator />
            </div>
          </div>
          {this.props.children}
      </div>
      );
    }

    return (
      <div>
        { customers }
      </div>
    );
  }
}

export default App;
