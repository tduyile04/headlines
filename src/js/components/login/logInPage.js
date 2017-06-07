import React from 'react';
import GoogleLogin from 'react-google-login';
import { withRouter } from 'react-router-dom';
// import { config } from 'dotenv';
import background from '../../../images/login2.jpg';

class logInPage extends React.Component {
  constructor() {
    super();
    this.responseGoogle = this.responseGoogle.bind(this);
  }

  responseGoogle(response) {
    const loginProfile = response.getBasicProfile();
    const userProfile = {};
    userProfile.name = loginProfile.getName();
    userProfile.email = loginProfile.getEmail();
    userProfile.idToken = response.googleId;
    localStorage.setItem('userProfile', JSON.stringify(userProfile));
    this.props.history.push('/sources');
  }

  render() {
    // const clientId = process.env.CLIENT_ID;
    const clientId = '658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com'
    return(
      <div className='wallpaper'>
        <h4 className='white-text'>headlines</h4>
        <h5 className='white-text'>...reporting light sources after sunset</h5>
        <p className='white-text'>Do you have a google account</p>
        <div className="card-action">
          <GoogleLogin
            className="waves-effect waves-light btn"
            clientId={clientId}
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
            buttonText='Log In'
            uxMode='popup'>
          </GoogleLogin>
        </div>
      </div>
    );
  }
}

export default withRouter(logInPage);;