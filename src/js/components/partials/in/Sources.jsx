import React from 'react';
import PropTypes from 'prop-types';
import Source from './Source.jsx';

/**
 * Sources parent component for all the sources retrieved from the api
 * @class Sources
 * @extends {React.Component}
 */
class Sources extends React.Component {
  render() {
    const filteredSources = this.props.sources;
    return (
      <div className="row">
        {
          filteredSources.map((source) => {
            return <Source key={source.id} source={source} />;
          }, this)
        }
      </div>
    );
  }
}

Sources.propTypes = {
  sources: PropTypes.array
};

export default Sources;
