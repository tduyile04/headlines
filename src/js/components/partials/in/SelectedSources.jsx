import React from 'react';
import PropTypes from 'prop-types';
import Sources from './Sources.jsx';

/**
 * Displays the sources available for each page
 * @param {any} { sources } all sources retrieved from the api
 * @returns component showing the paginated sources
 */
function SelectedSources({ sources }) {
  return (
    <div className="row source-container">
      <Sources sources = {sources} />
    </div>
  );
}

SelectedSources.propTypes = {
  sources: PropTypes.array
};

export default SelectedSources;
