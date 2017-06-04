import React from 'react';
import HeadlineAction from '../../../actions/HeadlineAction';

class Nav extends React.Component {

  constructor() {
    super();
    this.state = {
      search: ''
    }
    this.searchSources = this.searchSources.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  searchSources(query) {
		HeadlineAction.searchSources(query)
	}

  onChange(event) {
    this.setState({
      search: event.target.value
    });
  }

  onKeyDown(event) {
    if (event.key === 'Enter') {
      this.searchSources(this.state.search);
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper grey darken-3">
          <a href="/" className="brand-logo">
            <span className="orange-text text-accent-1">headlines</span>
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
            <li><a href="/login">Log In</a></li>
          </ul>
        </div>{/*nav-wrapper*/}
      </nav>
    )
  }
}

export default Nav;