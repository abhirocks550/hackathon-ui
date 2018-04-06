import React from 'react';
import { Link, IndexLink } from 'react-router';
import axios from 'axios';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        username: '',
        password: '',
      };

  }

  updateUserName = (event) => {
    let selectedUsername = event.target.value;

    this.setState({
        username: selectedUsername,
      });
  };

  updatePassword = (event) => {
    let selectedPassword = event.target.value;

    this.setState({
        password: selectedPassword,
      });
  };

  loginUser = (event) => {
    event.preventDefault();
    console.log(this.state);
    // axios({
    //   method: 'post',
    //   url: '/user/12345',
    //   data: {
    //       username: 'Fred',
    //       password: 'Flintstone',
    //     },
    // });
  };

  render() {
    return (
        <div>
            <h2>Modal Login Form</h2>
            <form>
                <div className="form-group">
                <label>Username:</label>
                <input type="text" onChange={this.updateUserName} className="form-control" id="uname" placeholder="Username" name="username" />
                </div>
                <div className="form-group">
                <label>Password:</label>
                <input type="password" onChange={this.password} required className="form-control" id="password" placeholder="Enter password" name="password" />
                </div>
                <button type="submit" onClick={this.loginUser} className="btn btn-default">Sign in</button>
            </form>
        </div>
    );
  }
};

export default Login;
