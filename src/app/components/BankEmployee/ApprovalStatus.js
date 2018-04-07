import React from 'react';
import { Link, IndexLink } from 'react-router';
import axios from 'axios';

class ApprovalStatus extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        userList: [],
        message: '',
      };
  }

  approveReject = (event, status, user) => {
      let button = status;
      var retrievedObject = JSON.parse(localStorage.getItem('Customerstate'));

      axios({
        method: 'post',
        url: 'http://10.117.189.16:8080/loan_app/loanservice/loandecision',
        data: {
            username: user.username,
            action: button,
          },
      }).then((response) => {
          if (response.status === 204) {
            this.setState({
                message: 'User loan request has been ' + button,
              });

            axios.get('http://10.117.189.16:8080/loan_app/loanservice/getloans')
               .then((response) => {
                    console.log(response.data);
                    this.setState({
                        userList: response.data,
                      });
                  });
          }
        });
    };

  componentWillMount() {
    axios.get('http://10.117.189.16:8080/loan_app/loanservice/getloans')
    .then((response) => {
        console.log(response.data);
        this.setState({
            userList: response.data,
          });
      });
  }

  render() {
    let request = null;
    request = this.state.userList.map((user, index) => {
            return <tr key={index}>
                    <td>{user.username}</td>
                    <td>{user.tenure}</td>
                    <td>{user.amount}</td>
                    <td>{user.status}</td>
                    <td>
                        <button className="btn btn-primary" id="btnApprove" name="approve"
                        onClick={(event) => this.approveReject(event, 'APROVED', user)}>Approve</button>&nbsp;
                        <button className="btn btn-danger" id="btnApprove" name="reject"
                        onClick={(event) => this.approveReject(event, 'REJECTED', user)}>Reject</button>
                    </td>
           </tr>;
          });

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
                    <th>Take Action</th>
                </tr>
                </thead>
                <tbody>
                {request}
                </tbody>
            </table>
        </div>
    );
  }
}

export default ApprovalStatus;
