import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  browserHistory,
} from 'react-router-dom';
import App from '../components/App.jsx';
import LogInPage from '../components/login/LogInPage.jsx';
import ArticlesPage from '../components/articles/ArticlesPage.jsx';
import ArticleDetailsPage from '../components/articles/ArticleDetailsPage.jsx';
import FavouritesPage from '../components/favourites/FavouritesPage.jsx';
import PrivateRoute from './PrivateRoute.jsx';
import PublicRoute from './PublicRoute.jsx';

class Routes extends React.Component {
  constructor() {
    super();
    this.state = {
      authenticated: false
    };
    this.checkAuthentication = this.checkAuthentication.bind(this);
  }

  componentDidMount() {
    this.checkAuthentication();
  }

/**
 * Handles the authentication for the user via its id token
 */
  checkAuthentication() {
    if (localStorage.getItem('userProfile')) {
      this.setState({
        authenticated: true
      });
    } else {
      this.setState({
        authenticated: false
      });
    }
  }

  render() {
    return (
      <Router history={browserHistory}>
        <Switch>
          <PublicRoute
            exact path="/"
            component={LogInPage}
            authenticated={this.state.authenticated}
          />
          <PrivateRoute
            path="/favourites"
            component={FavouritesPage}
            authenticated={this.state.authenticated}
          />
          <PrivateRoute
            path="/sources"
            component= {App}
            authenticated={this.state.authenticated}
          />
          <PrivateRoute
            path="/articles/:title"
            component= {ArticlesPage}
            authenticated={this.state.authenticated}
          />
          <PrivateRoute
            path="/article/detail"
            component={ArticleDetailsPage}
            authenticated={this.state.authenticated}
          />
        </Switch>
      </Router>
    );
  }
}
export default Routes;
