import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import App from './components/App';
// import SignUpPage from './components/Signup/SignUpPage';
// import SignUpForm from './components/SignUp/SignUpForm';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import {BrowserRouter as Router, Route, browserHistory} from 'react-router-dom';

import routes from './routes';

const store = createStore((state = {}) => state, applyMiddleware(thunk));

render(
  <Provider store={store}>
  <Router history={browserHistory} routes={routes}>
    <div><Route path="/" component={App}/></div>
  </Router>
</Provider>, document.getElementById('app'));
