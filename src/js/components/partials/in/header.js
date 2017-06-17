import React from 'react';
import { withRouter } from 'react-router-dom';
import HeadlineActions from '../../../actions/HeadlineAction';

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

  searchSources(query) {
		HeadlineActions.searchSources(query)
	}

  retrieveAllSources() {
    HeadlineActions.getSources();
  }

  onChange(event) {
    this.setState({
      search: event.target.value
    });
  }

  onKeyDown(event) {
    const query = this.state.search;
    if (event.key === 'Enter') {
      this.searchSources(query);
      this.setState({
        search: ''
      });
    }
  }

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