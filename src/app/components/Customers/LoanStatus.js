import React from 'react';
import { Link, IndexLink } from 'react-router';
import axios from 'axios';

class LoanStatus extends React.Component  {
  constructor(props) {
    super(props);

    this.state = {
        requestList: [],
        message: '',
        disburstment: {},
      };
  }

  componentWillMount() {
    var retrievedObject = JSON.parse(localStorage.getItem('Customerstate'));
    let url = 'http://10.117.189.16:8080/loan_app/loanservice/getloansbyuser/' + retrievedObject.username;

    axios.get(url)
    .then((response) => {
        console.log(response.data);
        this.setState({
            requestList: response.data,
          });
      });

    let loanDiburstMent = 'http://10.117.189.16:8080/loan_app/loanservice/getloandisbursement/' + retrievedObject.username;

    axios.get(url)
    .then((response) => {
        console.log(response.data);
        debugger;
        this.setState({
            disburstment: response.data,
          });
      });
  }

  render() {
    let emiMessage = '';
    if (this.state.disburstment.disburstment) {
      emiMessage = (
           <h3>Your Emi is {this.state.requestList.emi}</h3>
        );
    }

    return (
         <div className="container">
            <h2>Loan request status</h2>
            <div className="message">
                <h4>{this.state.message}</h4>
            </div>
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>Username</th>
                    <th>Tenure</th>
                    <th>Amount</th>
                    <th>Status</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{this.state.requestList.username}</td>
                    <td>{this.state.requestList.tenure}</td>
                    <td>{this.state.requestList.amount}</td>
                    <td>{this.state.requestList.status}</td>
                   </tr>
                </tbody>
            </table>
            {emiMessage}
        </div>

    );
  }

}

export default LoanStatus;
