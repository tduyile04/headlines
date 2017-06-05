import React from 'react';
import Banner from './banner';
import GridLayout from './gridLayout';
import Collections from './collections';

class Articles extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: ''
    };
  }

  componentWillMount() {
    this.setState({
      articles: this.props.articles
    });
  }

  render() {
    const { articles } = this.state;
    const bannerArticle = articles[0];
    const gridArticles = articles.slice(1, 4);
    const collectionArticles = articles.slice(4, articles.length);
    return(
      <div>
        <Banner article = { bannerArticle } />
        <GridLayout articles= { gridArticles } />
        <Collections articles = { collectionArticles } />
      </div>
    )
  }
}

export default Articles;
