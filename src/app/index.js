import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './container/App';
import Home from './container/Home/Home';
import About from './components/About/About';

import './index.css';

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App} >
              <Route path="about" component={About} />  
            </Route>
        </Router>
    </Provider>, window.document.getElementById('app'));
