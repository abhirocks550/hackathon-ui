import React from 'react';
import './NavigationBar.css';
import { Link, IndexLink } from 'react-router';
import axios from 'axios';

const NavBar = (props) => {

    axios.get('https://api.github.com/users/maecapozzi')
    .then(response => console.log(response));
    let navBarSection =
        <section id="navBar-section">
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header" id="navBarHeading">
                        <span>Banking system </span>
                    </div>
                    {/*<ul className="nav navbar-nav">
                        <li><Link to="/" activeClassName="active" >Home</Link></li>
                        <li><Link to="/about" activeClassName="active" >About</Link></li>
                    </ul>*/}
                </div>
            </nav>
        </section>;

    return navBarSection;
  };

export default NavBar;
