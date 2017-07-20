import React from 'react';
import PropTypes from 'prop-types';
import Sources from './Sources.jsx';

/**
 * Displays the sources available for each page
 * @param {any} all sources retrieved from the api
 * @returns component showing the paginated sources
 */
function SelectedSources({ sources }) {
  return (
    <div className="row source-container">
      {
        typeof sources === 'string' && (
          <h4 className="white-text center-align">
            No sources found that match this query
          </h4>
        )
      }
      <Sources sources = {sources} />
    </div>
  );
}

SelectedSources.propTypes = {
  sources: PropTypes.array
};

export default SelectedSources;
