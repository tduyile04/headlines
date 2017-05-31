import React from 'react';
import Source from './source';

class Sources extends React.Component {
  render() {
    return (
      <div>
        {
          this.props.sources.map((source) => {
            return <Source source={source} />
          })
        }
      </div>
    );
  }
};

export default Sources;
