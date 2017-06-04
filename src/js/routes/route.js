import React from 'react';
import {
  BrowserRouter as Router,
  Route, 
  Switch,
  browserHistory
} from 'react-router-dom';
import App from '../components/app';
import logInPage from '../components/login/logInPage';
import Articles from '../components/articles/articles';


const Routes = ({history}) => (
  <Router history={browserHistory}>
    <Switch>
      <Route exact path='/' component= {App} />
      <Route path='/login' component= {logInPage} />
      <Route path='/articles/:title' component= {Articles} />
    </Switch>
  </Router>
);

export default Routes;



