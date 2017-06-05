import React from 'react';

const Banner = ({article}) => {
  return (
    <section>
      <div className='slider'>
        <ul className='slides'>
          <li>
            <img src={article.urlToImage} className='images' />
          </li>
        </ul>
      </div>
      <div>
        <a href={article.url}>
          <h4>{article.title}</h4>
        </a>
        <h6>{article.author}</h6>
      </div>
    </section>
  );
}

export default Banner;
