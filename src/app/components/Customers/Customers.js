import React from 'react';
import { Link, IndexLink } from 'react-router';
import axios from 'axios';
import CustomerNavigation from './Customernavigation';

class Customers extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.location);
    this.state = {
    };

  }

  render() {
    return (
        <div>
            <CustomerNavigation />
            {this.props.children}
        </div>
    );
  }
};

export default Customers;
