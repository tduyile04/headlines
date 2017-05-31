import React from 'react';

const Source = ({source}) => {
  return(
      <div className="col s12 m3">
        <h6 className="header blue-text center-align">{source.name}</h6>
        <a href="#">
          <div className="card horizontal card hoverable grey darken-3">
            <div className="card-image">
              <img src="http://lorempixel.com/100/190/nature/6" />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <p>{source.description}</p>
              </div>
              <div className="card-action">
                <a href="#">View Articles</a>
              </div>
            </div>
          </div>
        </a>
      </div>
  );
}

export default Source;
