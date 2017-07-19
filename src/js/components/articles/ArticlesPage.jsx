import React from 'react';
import PropTypes from 'prop-types';
import 'react-select/dist/react-select.css';
import HeadlineAction from '../../actions/HeadlineAction';
import HeadlineArticleStore from '../../stores/HeadlineArticleStore';
import NavBar from '../partials/in/NavBar.jsx';
import Spinner from '../partials/in/Spinner.jsx';
import Article from '../partials/in/Article.jsx';
import Footer from '../partials/in/Footer.jsx';


/**
 * Parent Component for the article page, passes all articles
 * to child componet
 * @class ArticlePage
 * @extends {React.Component}
 */
class ArticlePage extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: '',
      sourceName: '',
      value: 'top',
      sortOptions: []
    };
    this.getArticles = this.getArticles.bind(this);
  }

  componentWillMount() {
    const sourcePath = this.props.history.location.pathname;
    const extractTitle = sourcePath.split('/')[2].replace(/\s+/g, '-');
    const extractSortType = sourcePath.split('/')[3];
    this.setState({
      sourceName: extractTitle,
      value: extractSortType
    }, () => {
      HeadlineAction.getArticles(extractTitle, this.state.value);
    });
    HeadlineArticleStore.on('change', this.getArticles);
  }

  componentWillUnmount() {
    HeadlineArticleStore.removeListener('change', this.getArticles);
  }

  /**
   * gets all articles from the store and re-sets its state
   * correspndingly
   * @memberof ArticlePage
   */
  getArticles() {
    this.setState({
      articles: HeadlineArticleStore.getAllArticles()
    });
  }

  render() {
    const user = localStorage.getItem('userProfile');
    const { articles, sourceName } = this.state;
    return (
      <section>
        {
          !articles && (
            <div>
              <NavBar user={user}/>
              <Spinner />
            </div>
            )
        }
        {
          !!articles && (
            // display articles
            <div>
              <NavBar articles = {articles} user={user} />
              <div className="left-align">
                <h4 className="orange-text text-accent-1 col m6">
                  {sourceName}
                </h4>
              </div>
              <div className="row source-container">
                {
                  articles.length > 1 &&
                  articles.map((article) => {
                    return <Article key={article.url} article = {article} />;
                  }, this)
                }
              </div>
            </div>
          )
        }
        <Footer />
      </section>
    );
  }
}

ArticlePage.propTypes = {
  history: PropTypes.object
};

export default ArticlePage;
