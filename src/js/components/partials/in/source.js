import React from 'react';

class Source extends React.Component {
  constructor() {
    super();
    // this.redirect = this.redirect.bind(this);
  }

  // redirect(sourceName) {
  //   window.location = '/articles/' + sourceName;
  // }

  render() {
    let source = this.props.source;
    return(
        <div className="col s12 m3">
          <h6 className="header blue-text center-align">{source.name}</h6>
          <div className="card card hoverable grey darken-3">
            <div className="card-image">
              <img src="http://lorempixel.com/100/190/nature/6" />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <p>{source.description}</p>
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
