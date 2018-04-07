import React from 'react';
import { Link, IndexLink } from 'react-router';
import axios from 'axios';
import EmiCalculator from '../EmiCalculator/EmiCalculator';

class ApplyLoan extends React.Component  {
  constructor(props) {
    super(props);

    this.state = {
        amount: '',
        tenure: 5,
        emiMessage: '',
      };

    this.updateAmount = this.updateAmount.bind(this);
    this.updateTenure = this.updateTenure.bind(this);
    this.applyLoan = this.applyLoan.bind(this);
  }

  updateAmount(event) {
    let SelectedAmount = event.target.value;
    this.setState({
        amount: SelectedAmount,
      });
  }

  updateTenure(event) {
    let Selectedtenure = event.target.value;
    this.setState({
        tenure: Selectedtenure,
      });
  }

  applyLoan(event) {
    event.preventDefault();
    var retrievedObject = JSON.parse(localStorage.getItem('Customerstate'));
    let amount = this.state.amount;
    let tenure = this.state.tenure;
    let username = retrievedObject.username;

    axios({
      method: 'post',
      url: 'http://10.117.189.243:8080/loan_app/loanservice/applyloan',
      data: {
          username: username,
          amount: amount,
          tenure: tenure,
        },
    }).then((response) => {
        console.log(response);
        if (response.status === 204) {
          this.setState({
            amount: '',
            tenure: 5,
            emiMessage: 'Loan request has been submitted successfully',
          });
        }
      });
  }

  render() {

    return (
        <div className="container">
            <h2>Apply loan</h2>
              <div>
              <form>
                  <div className="form-group">
                  <label>Type of Loan:</label>
                  <input type="text" className="form-control" id="type" placeholder="Home Loan" name="type" disabled />
                  </div>
                  <div className="form-group">
                  <label>Amount:</label>
                  <input type="text" onChange={this.updateAmount} required="required" value={this.state.amount}
                  className="form-control" id="amount" placeholder="Enter Amount" name="amount" />
                  </div>
                  <div className="form-group">
                  <label>Tenure: </label><br/>
                  <select id="tenure"
                  value={this.state.tenure}
                  defaultValue={this.state.tenure} onChange={this.updateTenure}>
                      <option value="5">5</option>
                      <option value="10">10</option>
                      <option value="15">15</option>
                      <option value="20">20</option>
                      <option value="25">25</option>
                  </select>
                  </div>
                  <div className="form-group">
                  <label>Rate of interest:</label>
                  <input type="text" className="form-control" id="roi" placeholder="9%" name="roi" disabled />
                  </div>
                  <button type="submit" onClick={this.applyLoan} className="btn btn-primary">Apply loan</button>
              </form>

              <div className="message">
                  <h4>{this.state.emiMessage}</h4></div>
              </div>
        </div>
    );
  }
}

export default ApplyLoan;
