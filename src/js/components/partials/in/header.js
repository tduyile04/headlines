import React from 'react';

class Nav extends React.Component {
  
  automateSearch(e) {
    const searchQuery = e.target.value;
    this.props.searchSources(searchQuery);
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
                onChange={this.automateSearch.bind(this)} />
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