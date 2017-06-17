import React from 'react';
import { withRouter } from 'react-router-dom';
import renderHTML from 'react-render-html';
import HeadlineActions from '../../../actions/HeadlineAction';
import HeadlineScrapeStore from '../../../stores/HeadlineScrapeStore';

class Grid extends React.Component{
  constructor() {
    super();
    this.state = {
      article: '',
      fullArticle: ''
    }
    this.showFullArticle = this.showFullArticle.bind(this);
  }

  componentWillMount() {
    this.setState({
      article: this.props.article
    })
  }

  showFullArticle (url) {
    HeadlineActions.showFullArticle(url);
    this.props.history.push('/article/detail');
  }

  render() {
    const { article, fullArticle } = this.state;
    return (
      <section>
        {(article) ?
          <div className='col s12 m4' id='grid-card'>
            <div className='card grey darken-3'>
              <img src= {article.urlToImage}  className='col s12 m10 card-image'/>
              <div className='grid-content'>
                <h5 className='white-text'>{article.title}</h5>
                <h6 className='white-text'>{article.description}</h6>
                <h6 className='white-text'>{article.author}</h6>
              </div>
              <div className='card-action'>
                <button className='btn waves' onClick={() => this.showFullArticle(article.url) }>Read More</button>
              </div>
            </div>
          </div> : ''
        }
      </section>
    );
  }
}

export default withRouter(Grid);