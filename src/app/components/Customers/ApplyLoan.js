import React from 'react';
import { Link, IndexLink } from 'react-router';
import axios from 'axios';

class ApplyLoan extends React.Component  {
  constructor(props) {
    super(props);
    this.state =
        {
          amount: '',
          tenure: 5,
          emiMessage: '',
        };
  }

  render() {

    return (
        <div>
            <h2>Apply loan</h2>
        </div>
    );
  }
}

export default ApplyLoan;
