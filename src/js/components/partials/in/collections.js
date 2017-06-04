import React from 'react';
import Collection from './collection';

const Collections = ({articles}) => {
  return (
    <div>
      {
        articles.map((article) => {
          return <Collection key={article.publishedAt} article= {article} />
        }, this)
      }
    </div>
  );
};

export default Collections;