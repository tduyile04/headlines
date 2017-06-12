import React from 'react';
import {
  BrowserRouter as Router,
  Route, 
  Switch,
  browserHistory
} from 'react-router-dom';
import App from '../components/app';
import logInPage from '../components/login/logInPage';
import Articles from '../components/articles/articlesPage';
// import ArticleDetails from '../components/partials/in/article-details';


const Routes = ({history}) => (
  <Router history={browserHistory}>
    <Switch>
      <Route exact path='/' component={logInPage} />
      <Route path='/sources' component= {App} />
      <Route path='/articles/:title' component= {Articles} />
      {/*<Route path='/article/detail' component={ArticleDetails} />*/}
    </Switch>
  </Router>
);

export default Routes;



