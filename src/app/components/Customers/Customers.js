import React from 'react';
import { Link, IndexLink } from 'react-router';
import axios from 'axios';
import CustomerNavigation from './Customernavigation';

class Customers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };

  }

  render() {
    return (
        <div>
            <CustomerNavigation />
        </div>
    );
  }
};

export default Customers;
