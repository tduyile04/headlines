import React from 'react';
import { withRouter, browserHistory } from 'react-router-dom';
import HeadlineActions from '../../../actions/HeadlineAction';

/**
 * Navigation bar display on the other dashbooard
 * @class NavBar
 * @extends {React.Component}
 */
class NavBar extends React.Component {

  constructor() {
    super();
    this.state = {
      search: '',
      showAll: false
    }
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
    const {showAll} = this.state;
    return (
      <nav>
        <div className="nav-wrapper grey darken-3">
          <a className="brand-logo">
            <span className="orange-text text-accent-1" onClick={this.props.history.goBack}>headlines</span>
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down orange-text text-accent-1">
            <li><a onClick={this.logout}>Log Out</a></li>
          </ul>
        </div>{/*nav-wrapper*/}
      </nav>
    )
  }
}

export default withRouter(NavBar);