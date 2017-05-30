import React from 'react';
import {
  BrowserRouter as Router,
  Route, 
  Switch,
  browserHistory
} from 'react-router-dom';
import App from '../components/app';
import logInPage from '../components/login/logInPage';


const Routes = ({history}) => (
  <Router history={browserHistory}>
    <Switch>
      <Route exact path='/' component= {App} />
      <Route path='/login' component= {logInPage} /> 
    </Switch>
  </Router>
);

export default Routes;



