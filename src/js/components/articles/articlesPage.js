import React from 'react';
import HeadlineAction from '../../actions/HeadlineAction';
import HeadlineArticleStore from '../../stores/HeadlineArticleStore';
import Nav from '../partials/in/header';
import Spinner from '../partials/in/spinner';
import Articles from '../partials/in/articles';

class ArticlePage extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: ""
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
    return (
      <section>
        {
          !articles && (
            <div>
              <Nav />
              <Spinner />
            </div>
            )
        }
        {
          !!articles && (
            // display articles
            <div>
              <Articles articles = {this.state.articles} />
            </div>
          )
        }
      </section>
    )
  }
}

export default ArticlePage;