import React from 'react';
import { Link, IndexLink } from 'react-router';
import './EmiCalculator.css';
import axios from 'axios';

class EmiCalculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        amount: '',
        tenure: 5,
        emiMessage: '',
      };

    this.updateAmount = this.updateAmount.bind(this);
    this.updateTenure = this.updateTenure.bind(this);
    this.calculateEmi = this.calculateEmi.bind(this);
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

  calculateEmi(event) {
    event.preventDefault();
    let amount = this.state.amount;
    let tenure = this.state.tenure;

    let url = `http://10.117.189.243:8080/loan_app/loanservice/emi/${amount}/${tenure}`;

    axios({
      method: 'get',
      url: url,
    }).then((response) => {
        console.log(response);
        debugger;
        this.setState({
            emiMessage: response.data,
          });
      });
  }

  render() {
    return (
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
                <button type="submit" onClick={this.calculateEmi} className="btn btn-primary">Submit</button>
            </form>

            <div className="message">
                <h4>Calculated EMI : {this.state.emiMessage}</h4></div>
            </div>
    );
  }

};

export default EmiCalculator;
