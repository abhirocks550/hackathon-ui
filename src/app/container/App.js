import React from 'react';
import { connect } from 'react-redux';
import NavBar from '../components/NavigationBar/NavigationBar';
import EmiCalculator from '../components/EmiCalculator/EmiCalculator';
import Login from '../components/Login/Login';
import './App.css';
import Customers from '../components/Customers/Customers';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        username: '',
        password: '',
        role: '',
      };

  }

  updateUserName = (event) => {
    let selectedUsername = event.target.value;

    this.setState({
        username: selectedUsername,
      });
    console.log(this.state);
  };

  updatePassword = (event) => {
    let selectedPassword = event.target.value;

    this.setState({
        password: selectedPassword,
      });
    console.log(this.state);
  };

  loginUser = (event) => {
    event.preventDefault();

    // axios({
    //   method: 'post',
    //   url: '/user/12345',
    //   data: {
    //       username: 'Fred',
    //       password: 'Flintstone',
    //     },
    // });
    this.setState({
      role: 'customer',
    });
    console.log(this.state);
  };

  render() {

    let customers = null;

    if (this.state.role === 'customer') {
      customers = (
        <Customers />
      );
    }

    else {
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
            updateUserName={this.updateUserName}
            updatePassword={this.updatePassword}
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
