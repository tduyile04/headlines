import React from 'react';

/**
 * Displays a default message when there is no source available
 * from the api/search query
 */
function EmptyNotification() {
  return (
    <div className="center-align">
      <h4 className="white-text">No source found that matches this query</h4>
    </div>
  );
}

export default EmptyNotification;
