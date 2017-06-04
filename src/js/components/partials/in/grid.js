import React from 'react';

const Grid = ({article}) => {
  return (
      <div className='col s12 m4'>
        <div>
          <img src= {article.urlToImage}  className='col s12 m10'/>
        </div>
        <div>
          <a href={article.url}>
            <h4>{article.title}</h4>
          </a>
          <h6>{article.description}</h6>
          <h6>{article.author}</h6>
        </div>
      </div>
  )
};

export default Grid;