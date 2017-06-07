import React from 'react';
import HeadlineActions from '../../../actions/HeadlineAction';
import HeadlineArticleStore from '../../../stores/HeadlineArticleStore';

class articleDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      detail: ''
    };
    this.getArticleDetail = this.getArticleDetail.bind(this);
  }

  componentWillMount() {
    HeadlineArticleStore.on('change', this.getArticleDetail);
  }

  componentWillUnmount() {
    HeadlineArticleStore.removeListener('change');
  }

  getArticleDetail() {
    this.setState({
      detail: HeadlineArticleStore.getArticleDetail()
    });
  }

  render() {
    const { detail } = this.state;
    return (
      <div>
        <header>
          <h3>{ detail.title }</h3>
          <h6>{ detail.author }</h6>
        </header>
        <div className='content'>
          <div>{ detail.image}</div>
          <div>{ detail.content }</div>
        </div>
      </div>
    )
  }
}

export default articleDetails;
