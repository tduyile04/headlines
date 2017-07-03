import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  browserHistory,
} from 'react-router-dom';
import App from '../components/App.jsx';
import LogInPage from '../components/login/LogInPage.jsx';
import ArticlesPage from '../components/articles/ArticlesPage.jsx';
import ArticleDetailsPage from '../components/articles/ArticleDetailsPage.jsx';
import FavouritesPage from '../components/favourites/FavouritesPage.jsx';

/**
 * Handles the routing for all the different app paths
 * @returns null
 */
function Routes() {
  return (
  <Router history={browserHistory}>
    <Switch>
      <Route exact path="/" component={LogInPage} />
      <Route path="/sources" component= {App} />
      <Route
        path="/articles/:title"
        component= {ArticlesPage} />
      <Route
        path="/article/detail"
        component={ArticleDetailsPage} />
        <Route path="/favourites" component={FavouritesPage} />
    </Switch>
  </Router>
  );
}

export default Routes;



