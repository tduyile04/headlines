import React from 'react';
import { Dropdown, Button, NavItem } from 'react-materialize';
import logo from '../../../../json/logo.json';

class Source extends React.Component {
  constructor() {
    super();
    this.state = {
      logos: ''
    }
  }

  componentWillMount() {
    this.setState({
      logos: logo
    });
  }

  render() {
    const { logos } = this.state;
    let source = this.props.source;
    let id = source.id;
    return(
        <div className="source col s12 m4">
          <div className="card card hoverable grey darken-3">
            <section className='row'>
              <div className='col s4 m4'>
                <img src={logos[id]} id='logo' />
              </div>
              <div className='col s8 m8'>
                <h5 className="header blue-text center-align">{source.name}</h5>
              </div>
            </section>
            <div className="card-stacked">
              <div className="card-content">
                <p className='grey-text text-lighten-5'>{source.description}</p>
              </div>
              <div className="card-action">
                <a href={'/articles/' + source.name}>View Articles</a>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Source;
