import React from 'react';
import { Link, IndexLink } from 'react-router';
import axios from 'axios';
import BankNavigation from './BankNavigation';

class BankEmployee extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var retrievedObject = JSON.parse(localStorage.getItem('Customerstate'));
    let customer = null;
    debugger;
    if (retrievedObject !== null && retrievedObject.role === 'bank') {
      customer = (
        <div>
        <BankNavigation />
        {this.props.children}
      </div>
      );
    } else {
      customer = (
      <div className="container">
        <h2>Please Login to access this page</h2>
        <Link to="/" activeClassName="active"><button className="btn btn-lg btn-primary" value="Login">
          Login
        </button>
        </Link>
      </div>);
    }

    return (
      <div>
      {customer}
      </div>
    );
  }
};

export default BankEmployee;
