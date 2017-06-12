import React from 'react';
import { Modal, Button } from 'react-materialize';
import renderHTML from 'react-render-html';
import HeadlineActions from '../../../actions/HeadlineAction';
import HeadlineScrapeStore from '../../../stores/HeadlineScrapeStore';

class Banner extends React.Component {
  constructor() {
    super();
    this.state = {
      article: '',
      fullArticle: ''
    };
    this.showFullArticle = this.showFullArticle.bind(this);
    this.getFullArticle = this.getFullArticle.bind(this);
  }

  componentWillMount() {
    this.setState({
      article: this.props.article
    });
    HeadlineScrapeStore.on('change', this.getFullArticle);
  }

  getFullArticle() {
    this.setState({
      fullArticle: HeadlineScrapeStore.getFullArticle()
    });
  }

  showFullArticle (url) {
    HeadlineActions.showFullArticle(url);
  }

  render() {
    const { article, fullArticle } = this.state;
    return (
      <section className='articleSection'>
        <div className='first-banner'>
          <img src={article.urlToImage} className='images' />
        </div>
        <div>
        <span>
          <h4 className='white-text'>{article.title}</h4>
          <h6 className='white-text'>-{article.author}</h6>
          <Modal
            header=''
            fixedFooter
            trigger={
              <Button waves='light' onClick={this.showFullArticle(article.url) }>Read More</Button>
            }>
            <h3><b>{renderHTML(fullArticle.title)}</b></h3><br />
            {renderHTML(fullArticle.content)}
          </Modal>
        </span>
        </div>
      </section>
    );
  }
}

export default Banner;
