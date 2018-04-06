import React from 'react';
import { Link, IndexLink } from 'react-router';
import axios from 'axios';

const Login = (props) => {
    return (
        <div>
            <h2>Modal Login Form</h2>
            <form>
                <div className="form-group">
                <label>Username:</label>
                <input type="text" onChange={props.updateUserName} className="form-control" id="uname" placeholder="Username" name="username" />
                </div>
                <div className="form-group">
                <label>Password:</label>
                <input type="password" onChange={props.password} required className="form-control" id="password" placeholder="Enter password" name="password" />
                </div>
                <button type="submit" onClick={props.loginUser} className="btn btn-default">Sign in</button>
            </form>
        </div>
    );
  }

export default Login;
