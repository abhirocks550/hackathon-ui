import React from 'react';
import { connect } from 'react-redux';
import NavBar from '../components/NavigationBar/NavigationBar';
import EmiCalculator from '../components/EmiCalculator/EmiCalculator';
import Login from '../components/Login/Login';
import './App.css';
import Customers from '../components/Customers/Customers';
import { browserHistory } from 'react-router';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        username: '',
        password: '',
        role: '',
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
      url: 'http://10.117.189.243:8080/loan_app/loanservice/login',
      data: {
          username: this.state.username,
          password: this.state.password,
        },
    }).then((response) => {
      if (response.data.valid && response.data.role === 'CUST') {
        this.setState({
          role: 'customer',
        });
        localStorage.setItem('Customerstate', JSON.stringify(this.state));
      }

      if (response.data.valid && response.data.role === 'BANK') {
        this.setState({
          role: 'bank',
        });
        localStorage.setItem('Customerstate', JSON.stringify(this.state));
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
        <h2>bank employee</h2>
      );
    } else {
      customers = (
      <div className="container">
          <NavBar />
          <div className="row">
            <div className="col-sm-6 col-md-6 emi">
              <h2>Emi Calculator</h2>
              <EmiCalculator />
            </div>
            <div className="col-sm-5 col-md-5 emi">
              <Login
              updateInput={this.updateInput}
              state={this.state}
              loginUser={this.loginUser}
              />
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
