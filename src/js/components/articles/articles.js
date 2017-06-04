import React from 'react';
import HeadlineAction from '../../actions/HeadlineAction';
import HeadlineSourceStore from '../../stores/HeadlineSourceStore';
import Nav from '../partials/in/header';
import Spinner from '../partials/in/spinner';

class Article extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: ""
    };
    this.getArticles = this.getArticles.bind(this);
  }

  componentWillMount() {
    const sourceName = this.props.history.location.pathname;
    let extractTitle = sourceName.split('/')[2];
    this.getArticles(extractTitle);
    HeadlineSourceStore.on('change', () => {
      if (HeadlineAction.getAllArticles) {
        this.setState({
          articles: HeadlineAction.getAllArticles()
        });
      }
    });
  }

  getArticles(source) {
		HeadlineAction.getArticles(source);
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
            <div></div>
          )
        }
      </section>
    )
  }
}

export default Article;