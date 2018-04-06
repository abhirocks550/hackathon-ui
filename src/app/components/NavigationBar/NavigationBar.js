import React from 'react';
import './NavigationBar.css';
import { Link, IndexLink } from 'react-router';

const NavBar = (props) => {
    let navBarSection =
        <section id="navBar-section">
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header" id="navBarHeading">
                        <span>Title</span>
                    </div>
                    <ul className="nav navbar-nav">
                        <li><Link to="/" activeClassName="active" >Home</Link></li>
                        <li><Link to="/about" activeClassName="active" >About</Link></li>
                    </ul>
                </div>
            </nav>
        </section>;

    return navBarSection;
  };

export default NavBar;
