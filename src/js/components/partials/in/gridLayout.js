import React from 'react';
import Grid from './grid';

/**
 * Grid stateless component listing a section of the articles returned in
 * the list
 * @class Collection
 * @extends {React.Component}
 */
const GridLayout = ({articles}) => {
  return (
    <div className='row'>
      {
        articles.map((article) => {
          return <Grid key ={article.publishedAt} article = {article} />
        }, this)
      }
    </div>
  );
};

export default GridLayout;