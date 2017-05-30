import React from 'react';

class Nav extends React.Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper grey darken-3">
          <a href="/" className="brand-logo" id="brand-size">
            <span className="orange-text text-accent-1">HeadLines</span>
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="/login">Log In</a></li>
            <li><a href="/signup">Sign Up</a></li>
          </ul>
        </div>{/*nav-wrapper*/}
      </nav>
    )
  }
}

export default Nav;