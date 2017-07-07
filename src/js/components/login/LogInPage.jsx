import React from 'react';
import PropTypes from 'prop-types';
import GoogleLogin from 'react-google-login';
import { withRouter } from 'react-router-dom';
import '../../../scss/style.scss';


/**
 * Component detailing the welcome page and log in option
 * with a Google id
 * @class logInPage
 * @extends {React.Component}
 */
class LogInPage extends React.Component {
  constructor() {
    super();
    this.responseGoogle = this.responseGoogle.bind(this);
  }

  /**
   * Sets appropriate user data in response to log in action and
   * saves a copy for reference in the local storage
   * @param {any} response
   * @memberof logInPage
   */
  responseGoogle(response) {
    const loginProfile = response.getBasicProfile();
    const userProfile = {};
    userProfile.name = loginProfile.getName();
    userProfile.email = loginProfile.getEmail();
    userProfile.image = loginProfile.Paa;
    userProfile.idToken = response.googleId;
    localStorage.setItem('userProfile', JSON.stringify(userProfile));
    this.props.history.push('/sources');
  }

  render() {
    const clientId = process.env.CLIENT_ID;
    return (
      <div className="wallpaper">
        <img src="../images/login2.jpg" className="wall" alt="" />
        <section className="tagline right-align">
          <h3 className="white-text">headlines</h3>
          <h4
            className="white-text"
          >
            ...reporting light sources after sunset
          </h4>
          <p className="white-text">Do you have a google account</p>
          <div className="card-action">
            <GoogleLogin
              className="waves-effect waves-light btn"
              clientId={clientId}
              onSuccess={this.responseGoogle}
              onFailure={this.responseGoogle}
              buttonText="Log In"
              uxMode="popup"
            />
          </div>
        </section>
      </div>
    );
  }
}

LogInPage.propTypes = {
  history: PropTypes.object
};

export default withRouter(LogInPage);
