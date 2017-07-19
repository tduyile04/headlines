import React from 'react';
import { withRouter } from 'react-router-dom';
import HeadlineAction from '../../../actions/HeadlineAction';

class Favourite extends React.Component {
  constructor() {
    super();
    this.showFullArticle = this.showFullArticle.bind(this);
  }

  /**
   * Creates an action to display the full article
   * @param {any} url address of the article to be scraped
   * @memberof Favourite
   */
  showFullArticle(url) {
    HeadlineAction.showFullArticle(url);
    this.props.history.push('/article/detail');
  }

  render() {
    const { favourite } = this.props;
    return (
      <div>
        <section>
          <div className="col s12 m6">
            <div className="card grey darken-3">
              <div className="card-content white-text">
                <span className="card-title">{favourite.title}</span>
                <p>{favourite.description}</p>
              </div>
              <div className="card-action" style={{ height: '70px' }}>
                <button
                  className="btn right blue lighten-1"
                  onClick={() => this.showFullArticle(favourite.url)}
                >
                  View Articles
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default withRouter(Favourite);
