import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

/**
 * 
 * 
 */
function goToArticle() {
  this.props.history.push('/favourites');
}

/**
 * Component display for each favourite added to the collection
 * @param {any} { favourite } each article added to the article collection
 * @returns {component}
 */
function Favourite({ favourite }) {
  return (
    <div>
      <section>
        <div className="col s12 m6">
          <div className="card grey darken-3">
            <div className="card-content white-text">
              <span className="card-title">{favourite.title}</span>
              <p>{favourite.description}</p>
            </div>
            <div className="card-action" style={{ height: '70px' }}>
              <button
                className="btn right"
                onClick={goToArticle}
              >
                View Articles
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

Favourite.propTypes = {
  favourite: PropTypes.object
};

export default withRouter(Favourite);
