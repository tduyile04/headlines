import React from 'react';

class Collection extends React.Component {
  constructor() {
    super();
    this.state = {
      article: ''
    }
    this.showDetail = this.showDetail.bind(this);
  }

  componentWillMount() {
    this.setState({
      article: this.props.article
    });
  }
  showDetail() {
    const {article} = this.state;
    const url = article.url;
    HeadlineAction.getArticleDetail(url);
  }
  render() {
    const { article } = this.state;
    return (
      <div>
        <ul className="collection grey darken-3">
          <li className="collection-item avatar">
            <img src={article.urlToImage} className="circle" />
            <span className="title white-text" onClick={this.showDetail}>{article.title}</span>
            <p className='white-text'>{article.description} <br />
              {article.author}
            </p>
            <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
          </li>
        </ul>
      </div>
    );
  }
};

export default Collection;