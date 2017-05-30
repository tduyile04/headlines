import React from 'react';

class logInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    };
    this.onChange = onChange.bind(this);
    this.onSubmit = onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      email: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <h2>Do you have a google plus account? Log In.</h2>
        <section className="row">
          <form className="push-s3 col s6" onSubmit={this.onSubmit}>
            <div className="row">
              <div className="input-field col s12">
                <input
                id="email"
                name="email"
                type="email"
                className="validate"
                value={this.state.email}
                onChange={this.onChange} />
                <label htmlFor="email">Email</label>
              </div>{/*input-field col s12*/}
            </div>{/*row*/}
            <div className="row">
              <button type="submit" className="waves-effect waves-light btn col s12" id="login">Log In</button>
            </div>{/*row*/}
          </form>
        </section>
      </div>
    );
  }
}

export default logInForm;