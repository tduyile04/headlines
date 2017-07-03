import React from 'react';
import { Redirect } from 'react-router-dom';
import renderHTML from 'react-render-html';
import NavBar from '../partials/in/NavBar.jsx';
import Spinner from '../partials/in/Spinner.jsx';
import Footer from '../partials/in/Footer.jsx';
import HeadlineScrapeStore from '../../stores/HeadlineScrapeStore';

/**
 * Component displaying scraped data from the original news source site
 * @class ArticleDetails
 * @extends {React.Component}
 */
class ArticleDetailsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      fullArticle: ''
    };
    this.getFullArticle = this
            .getFullArticle
            .bind(this);
  }

  componentDidMount() {
    HeadlineScrapeStore.on('change', this.getFullArticle);
  }

  /**
   * Retrieves full scraped data from the store and re-sets state
   * accordingly
   * @memberof ArticleDetails
   */
  getFullArticle() {
    this.setState({
      fullArticle: HeadlineScrapeStore.getFullArticle()
    });
  }

  render() {
    const user = localStorage.getItem('userProfile');
    if (!user) {
      return (
        <Redirect to="/"/>
      );
    }
    const { fullArticle } = this.state;
    return (
      <section>
        <NavBar user={user} /> {(fullArticle)
          ?
          <div>
            <div className="container">
              <h4
                className="white-text"
                style={{
                  fontWeight: 'bold'
                }}
              >
                {renderHTML(fullArticle.title)}
              </h4>
              <section className="white-text scraped-content">
                {(typeof fullArticle !== 'string')
                  ? renderHTML(fullArticle.content)
                  : <p className="white-text">No contents available</p>
                }
              </section>
            </div>
            <Footer />
          </div>
            : <Spinner/>}
      </section>
    );
  }
}

export default ArticleDetailsPage;
