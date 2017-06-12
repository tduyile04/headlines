import React from 'react';
import Source from './source';

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
