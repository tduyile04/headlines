import React from 'react';
import Grid from './grid';

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