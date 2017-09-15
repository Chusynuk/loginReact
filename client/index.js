import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import SignUpPage from './components/Signup/SignUpPage';
import SignUpForm from './components/SignUp/SignUpForm';
import { BrowserRouter as Router, Route, browserHistory } from 'react-router-dom';

import routes from './routes';

render (<Router history={browserHistory} routes={routes}><div><Route path="/" component={App}/></div></Router>, document.getElementById('app'));
