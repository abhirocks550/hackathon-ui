import React from 'react';
import { Link, IndexLink } from 'react-router';
import axios from 'axios';

class Customernavigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };

  }

  render() {
    return (
        <section id="navBar-section">
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header" id="navBarHeading">
                        <span>Banking system </span>
                    </div>
                    <ul className="nav navbar-nav">
                        <li><Link to="/" activeClassName="active" >Apply Loan</Link></li>
                        <li><Link to="/about" activeClassName="active">See Approvals</Link></li>
                    </ul>
                </div>
            </nav>
        </section>
    );
  }
};

export default Customernavigation;
