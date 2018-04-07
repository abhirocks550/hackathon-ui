import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './container/App';
import Home from './container/Home/Home';
import About from './components/About/About';
import Customers from '../app/components/Customers/Customers';
import ApplyLoan from '../app/components/Customers/ApplyLoan';
import LoanStatus from '../app/components/Customers/LoanStatus';
import BankEmployees from '../app/components/BankEmployee/BankEmployee';
import ApprovalStatus from '../app/components/BankEmployee/ApprovalStatus';

import './index.css';

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App} >
              <Route path="about" component={About} />  
            </Route>
             <Route path="/customers" component={Customers} >
                <IndexRoute component={ApplyLoan} />
                <Route path="/loanstatus" component={LoanStatus} />
            </Route>
            <Route path="/bankemployee" component={BankEmployees} >
                <IndexRoute component={ApprovalStatus} />
            </Route>
        </Router>
    </Provider>, window.document.getElementById('app'));
