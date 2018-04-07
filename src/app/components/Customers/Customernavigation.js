import React from 'react';
import { Link, IndexLink } from 'react-router';
import axios from 'axios';

class Customernavigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  logOut() {
    alert('logout');
    localStorage.clear();
  }

  render() {

    let retrievedObject = JSON.parse(localStorage.getItem('Customerstate'));

    return (
        <section id="navBar-section">
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header" id="navBarHeading">
                        <span>Banking system </span>
                    </div>
                    <ul className="nav navbar-nav">
                        <li><Link to="/customers" activeClassName="active" >Apply Loan</Link></li>
                        <li><Link to="/loanstatus" activeClassName="active">See Approvals</Link></li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li onClick={this.logOut}><Link to="#"><span className="glyphicon glyphicon-log-in"></span> Logout</Link></li>
                    </ul>
                </div>
            </nav>
            <h3>Welcome {retrievedObject.username}</h3>
        </section>
    );
  }
};

export default Customernavigation;
