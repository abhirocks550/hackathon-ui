import React from 'react';
import { Link, IndexLink } from 'react-router';
import axios from 'axios';
import CustomerNavigation from './Customernavigation';

class Customers extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.location);
  }

  render() {
    var retrievedObject = JSON.parse(localStorage.getItem('Customerstate'));
    let customer = null;
    if (retrievedObject !== null && retrievedObject.role === 'customer') {
      customer = (
        <div>
        <CustomerNavigation />
        {this.props.children}
      </div>
      );
    } else {
      customer = (
      <div>
        <h2>Please Login to access this page</h2>
      </div>);
    }

    return (
      <div>
      {customer}
      </div>
    );
  }
};

export default Customers;
