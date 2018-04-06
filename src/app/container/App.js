import React from 'react';
import { connect } from 'react-redux';
import NavBar from '../components/NavigationBar/NavigationBar';
import EmiCalculator from '../components/EmiCalculator/EmiCalculator';
import Login from '../components/Login/Login';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <NavBar />
        <div className="row">
          <div className="col-sm-6 col-md-6 emi">
            <h2>Emi Calculator</h2>
            <EmiCalculator />
          </div>
          <div className="col-sm-5 col-md-5 emi">
            <Login />
          </div>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
