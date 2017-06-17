import React from 'react';
import HeadlineAction from '../../actions/HeadlineAction';
import HeadlineArticleStore from '../../stores/HeadlineArticleStore';
import NavBar from '../partials/in/header-detail';
import Spinner from '../partials/in/spinner';
import Articles from '../partials/in/articles';

class ArticlePage extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: '',
      sortOptions: ''
    };
    this.getArticles = this.getArticles.bind(this);
  }

  componentWillMount() {
    const sourceName = this.props.history.location.pathname;
    let extractTitle = sourceName.split('/')[2].replace(/\s+/g, '-');
    HeadlineAction.getArticles(extractTitle, 'top');
    HeadlineArticleStore.on('change', this.getArticles);
  }
  componentWillUnmount() {
    HeadlineArticleStore.removeListener('change', this.getArticles);
  }

  getArticles() {
    this.setState({
      articles: HeadlineArticleStore.getAllArticles()
    });
	}

  render() {
    const { articles } = this.state;
    const user = localStorage.getItem('userProfile');
    console.log(user);
    return (
      <section>
        {
          !articles && (
            <div>
              <NavBar />
              <Spinner />
            </div>
            )
        }
        {
          !!articles && (
            // display articles
            <div>
              <NavBar articles = {articles} />
              <Articles articles = {articles} />
            </div>
          )
        }
      </section>
    )
  }
}

export default ArticlePage;