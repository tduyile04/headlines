import React from 'react';
import Nav from '../partials/out/header';
import background from '../../../images/login2.jpg';

class logInPage extends React.Component {
  render() {
    return(
      <div style='background-image: url({background})'>
        <Nav />
        <h4 class="white-text">Please Log In</h4>
      </div>
    );
  }
}

export default logInPage;