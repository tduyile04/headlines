import React from 'react';

class Grid extends React.Component{
  constructor() {
    super();
    this.state = {
      article: ''
    }
    this.goToDetails = this.goToDetails.bind(this);
  }

  componentWillMount() {
    this.setState({
      article: this.props.article
    })
  }

  goToDetails() {
    const { article } = this.state;
    const url = article.url;
    HeadlineActions.save(url);
  }

  render() {
    const { article } = this.state;
    return (
      <div className='col s12 m4' id='grid-card'>
        <div className='card grey darken-3'>
          <img src= {article.urlToImage}  className='col s12 m10 card-image'/>
          <div className='grid-content'>
            <h5 className='white-text'>{article.title}</h5>
            <h6 className='white-text'>{article.description}</h6>
            <h6 className='white-text'>{article.author}</h6>
          </div>
          <div className='card-action'>
              <button className='btn waves center-align'onClick={this.goToDetails}>Read More</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Grid;