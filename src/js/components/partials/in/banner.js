import React from 'react';
import { Modal, Button } from 'react-materialize';
import { withRouter } from 'react-router-dom';
import renderHTML from 'react-render-html';
import HeadlineActions from '../../../actions/HeadlineAction';
import HeadlineScrapeStore from '../../../stores/HeadlineScrapeStore';

class Banner extends React.Component {
  constructor() {
    super();
    this.state = {
      article: '',
      fullArticle: ''
    };
    this.showFullArticle = this.showFullArticle.bind(this);
  }

  componentWillMount() {
    this.setState({
      article: this.props.article
    });
  }

  showFullArticle (url) {
    HeadlineActions.showFullArticle(url);
    this.props.history.push('/article/detail')
  }

  render() {
    const { article, fullArticle } = this.state;
    return (
      <div>
        {(article) ? 
          <section className='articleSection'>
            <div className='first-banner'>
              <img src={article.urlToImage} className='images' />
            </div>
            <div>
            <span>
              <h4 className='white-text'>{article.title}</h4>
              <h6 className='white-text'>-{article.author}</h6>
              <button className='btn waves' onClick={() => this.showFullArticle(article.url) }>Read More</button>
            </span>
            </div>
          </section> : ''
        }
      </div>
    );
  }
}

export default withRouter(Banner);
