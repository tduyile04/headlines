import React from 'react';
import Source from './source';

/**
 * Sources parent component for all the sources retrieved from the api
 * @class Sources
 * @extends {React.Component}
 */
class Sources extends React.Component {
  render() {
    let filteredSources = this.props.sources;
    return (
      <div className='row'>
        {
          filteredSources.map((source) => {
            return <Source key={source.id} source={source} />
          }, this)
        }
      </div>
    );
  }
}; 

export default Sources;
