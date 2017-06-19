import React from 'react';
import { withRouter } from 'react-router-dom';
import renderHTML from 'react-render-html';
import HeadlineActions from '../../../actions/HeadlineAction';
import HeadlineScrapeStore from '../../../stores/HeadlineScrapeStore';

/**
 * Collection component detailing the display of the articles returned in
 * the list
 * @class Collection
 * @extends {React.Component}
 */
class Collection extends React.Component {
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
    });
  }

  /**
   * Creates an action that scrapes data from the original source url
   * into a new page
   * @param {any} url 
   * @memberof Banner
   */
  showFullArticle (url) {
    HeadlineActions.showFullArticle(url);
    this.props.history.push('/article/detail');
  }
  render() {
    const { article, fullArticle } = this.state;

    return (
      <section>
        {(article) ? 
          <div>
            <ul className="collection grey darken-3">
              <li className="collection-item avatar">
                <img src={article.urlToImage} className="circle" />
                <span className="title white-text">{article.title}</span>
                <p className='white-text'>{article.description} <br />
                  {article.author}
                </p>
                <div className='secondary-content'>
                  <button className='btn waves' onClick={() => this.showFullArticle(article.url) }>Read More</button>
                </div>
              </li>
            </ul>
          </div> : ''
        }
      </section>
    );
  }
};

export default withRouter(Collection);