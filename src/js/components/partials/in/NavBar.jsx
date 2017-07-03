import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import SideBar from '../in/SideBar.jsx';

/**
 * Navigation bar display on the other dashboard
 * @class NavBar
 * @extends {React.Component}
 */
class NavBar extends React.Component {

  constructor() {
    super();
    this.state = {
      search: '',
    };
    this.logout = this.logout.bind(this);
  }

  /**
   * logs out of the app and removes user profile from the local storage
   * @memberof NavBar
   */
  logout() {
    localStorage.removeItem('userProfile');
    this.props.history.replace('/');
  }

  render() {
    const { user } = this.props;
    return (
      <nav>
        <div className="nav-wrapper grey darken-3">
          <div className="brand-logo">
            <SideBar user={user} />
            <span
              className="white-text branded-logo"
              onClick={this.props.history.goBack}
            >
              headlines
            </span>
          </div>
          <ul
            id="nav-mobile"
            className="right hide-on-med-and-down orange-text text-accent-1"
          >
            <li><a onClick={this.logout}>Log Out</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

NavBar.propTypes = {
  history: PropTypes.object,
  user: PropTypes.string
};

export default withRouter(NavBar);
