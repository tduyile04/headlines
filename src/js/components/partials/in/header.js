import React from 'react';
import { withRouter } from 'react-router-dom';
import HeadlineActions from '../../../actions/HeadlineAction';

/**
 * Navigation bar display on the sources dashbooard
 * @class Nav
 * @extends {React.Component}
 */
class Nav extends React.Component {

  constructor() {
    super();
    this.state = {
      search: '',
      showAll: false
    }
    this.searchSources = this.searchSources.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.logout = this.logout.bind(this);
  }

  /**
   * Creates search actions from collection of the sources in the store
   * @param {any} query 
   * @memberof Nav
   */
  searchSources(query) {
		HeadlineActions.searchSources(query)
	}

  /**
   * Creates an action that gets data from the stores
   * @memberof Nav
   */
  retrieveAllSources() {
    HeadlineActions.getSources();
  }

  /**
   * Allows user input to be changed dynamically in the input field
   * @param {any} event 
   * @memberof Nav
   */
  onChange(event) {
    this.setState({
      search: event.target.value
    });
  }

  /**
   * automates source search when the enter key is pressed 
   * down
   * @param {any} event
   * @memberof Nav
   */
  onKeyDown(event) {
    const query = this.state.search;
    if (event.key === 'Enter') {
      this.searchSources(query);
      this.setState({
        search: ''
      });
    }
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
            <span className="orange-text text-accent-1" onClick={this.retrieveAllSources}>headlines</span>
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down orange-text text-accent-1">
            <li>
              <div className="input-field col s6 grey darken-3">
                <label htmlFor="search">
                  <i className="material-icons">search</i>
                </label>
                <input
                type="search"
                id="search"
                value={this.state.search}
                onChange={this.onChange}
                onKeyDown = {this.onKeyDown} />
              </div>
            </li>
            <li><a onClick={this.logout}>Log Out</a></li>
          </ul>
        </div>{/*nav-wrapper*/}
      </nav>
    )
  }
}

export default withRouter(Nav);