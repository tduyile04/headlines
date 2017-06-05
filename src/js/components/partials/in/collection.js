import React from 'react';

const Collection = ({ article }) => {
  return (
    <div>
      <ul className="collection">
        <li className="collection-item avatar">
          <img src={article.urlToImage} className="circle" />
          <span className="title">{article.title}</span>
          <p>{article.description} <br />
            {article.author}
          </p>
          <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
        </li>
      </ul>
    </div>
  );
};

export default Collection;