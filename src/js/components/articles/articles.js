import React from 'react';
import HeadlineAction from '../../actions/HeadlineAction';
import HeadlineStore from '../../stores/HeadlineStore';
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
    const sourceName = this.props.match.params.title;
    console.log(sourceName);
    this.getArticles(sourceName);
    HeadlineStore.on('load', () => {
      this.setState({
        articles: HeadlineAction.getAllArticles()
      });
      console.log()
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