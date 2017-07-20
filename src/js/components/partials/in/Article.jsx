import React from 'react';
import { withRouter } from 'react-router-dom';
import {
  ShareButtons,
  generateShareIcon
} from 'react-share';
import AlertContainer from 'react-alert';
import HeadlineAction from '../../../actions/HeadlineAction';

class Article extends React.Component {
  constructor() {
    super();
    this.state = {
      added: false
    };
    this.alertOptions = {
      offset: 14,
      position: 'bottom right',
      theme: 'light',
      time: 5000,
      transition: 'scale'
    };
    this.showFullArticle = this.showFullArticle.bind(this);
    this.addToCollections = this.addToCollections.bind(this);
    this.preventSavedDuplicates = this.preventSavedDuplicates.bind(this);
  }

  /**
   * Creates an action to display the full article
   * @param {any} url address of the article to be scraped
   * @memberof Article
   */
  showFullArticle(url) {
    HeadlineAction.showFullArticle(url);
    this.props.history.push('/article/detail');
  }

  /**
   * prevents duplicate saving of the same article
   * @param {any} newArticle new article to be saved
   * @returns {boolean}
   * @memberof Article
   */
  preventSavedDuplicates(newArticle) {
    let checkDuplicate = false;
    const articleCollections =
      JSON.parse(localStorage.getItem('saved-articles'));
    articleCollections.forEach((article) => {
      if (newArticle.title === article.title) {
        checkDuplicate = true;
      }
    });
    return checkDuplicate;
  }

  /**
   * Saves selected articles to the collection(favourites)
   * @param {any} title title of the article
   * @param {any} url address of the article
   * @param {any} description description of the article
   * @memberof Article
   */
  addToCollections(title, url, description) {
    const article = {};
    article.title = title;
    article.url = url;
    article.description = description;
    let articleCollections;
    try {
      articleCollections = JSON.parse(localStorage.getItem('saved-articles'));
    } catch (e) {
      articleCollections = null;
    }
    if (articleCollections === null) {
      articleCollections = [];
      articleCollections.push(article);
    } else {
      articleCollections.push(article);
    }
    localStorage.setItem('saved-articles', JSON.stringify(articleCollections));
    this.setState({
      added: true
    });
    this.msg.show('Added to Favourites', {
      time: 2000,
      type: 'success',
    });
  }

  render() {
    const { added } = this.state;
    const { article } = this.props;
    const {
      FacebookShareButton,
      WhatsappShareButton,
      GooglePlusShareButton,
      TwitterShareButton
    } = ShareButtons;
    const FacebookIcon = generateShareIcon('facebook');
    const TwitterIcon = generateShareIcon('twitter');
    const WhatsappIcon = generateShareIcon('whatsapp');
    const GooglePlusIcon = generateShareIcon('google');
    return (
      <div className="col s12 m6">
        <div className="card horizontal grey darken-3">
          <div className="card-image">
            <img src={article.urlToImage || ''} alt="" style={{ height: 341 }}/>
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <div className="article-header white-text">
                {(article.title.slice(0, 40)).toUpperCase()}...
              </div>
              <div className="divider" />
              <div className="article-description white-text">
                {article.description.slice(0, 120)}...<br />
              </div>
              <div>
                <span className="white-text left-align">
                  {article.author}
                </span>
              </div>
            </div>
            <div className="social-share row">
              <span className="col m3 s3">
                <FacebookShareButton
                url={article.url}
                title={article.title}
                description={article.description}
                picture={article.urlToImage}
                >
                <FacebookIcon size={32} round />
                </FacebookShareButton>
              </span>
              <span className="col m3 s3">
                <WhatsappShareButton
                url={article.url}
                title={article.title}
                >
                <WhatsappIcon size={32} round />
                </WhatsappShareButton>
              </span>
              <span className="col m3 s3">
                <TwitterShareButton
                url={article.url}
                title={article.title}
                >
                <TwitterIcon size={32} round />
                </TwitterShareButton>
              </span>
              <span className="col m3 s3">
                <GooglePlusShareButton
                url={article.url}
                title={article.title}
                >
                  <GooglePlusIcon size={32} round />
                </GooglePlusShareButton>
              </span>
            </div>
            <div className="card-action row">
              <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
              <button
                title="Read Full Article"
                className="btn waves col s6 m6 tooltipped"
                data-position="top"
                data-delay="50"
                data-tooltip="Read Full Article"
                onClick={() => this.showFullArticle(article.url)}
              >
                <i className="material-icons">reorder</i>
              </button>
             <button
                title="Save Article to Favourites"
                data-position="top"
                data-delay="50"
                data-tooltip="Save Articles to Favourites"
                className={
                  !added ?
                  'btn col s6 m6 blue darken-1 tooltipped' :
                  'btn col s6 m6 disabled'
                }
                onClick={!added && (() => this.addToCollections(
                  article.title,
                  article.url,
                  article.description
                ))}
              >
                <i className="material-icons">save</i>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Article);
