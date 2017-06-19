import React from 'react';
import Collection from './collection';

/**
 * Collection stateless component listing a section of the articles returned in
 * the list
 * @class Collection
 * @extends {React.Component}
 */
const Collections = ({articles}) => {
  return (
    <div className='headRoom'>
      {
        articles.map((article) => {
          return <Collection key={article.publishedAt} article= {article} />
        }, this)
      }
    </div>
  );
};

export default Collections;