import React from 'react';
import renderHTML from 'react-render-html';
import NavBar from '../partials/in/header-detail';
import Spinner from '../partials/in/spinner';
import HeadlineActions from '../../actions/HeadlineAction';
import HeadlineScrapeStore from '../../stores/HeadlineScrapeStore';

class ArticleDetails extends React.Component {
  constructor() {
		super();
		this.state = {
			fullArticle: ''
		}
		this.getFullArticle = this.getFullArticle.bind(this);
	}
	
	componentDidMount() {
    HeadlineScrapeStore.on('change', this.getFullArticle);
	}

	getFullArticle() {
    this.setState({
      fullArticle: HeadlineScrapeStore.getFullArticle()
    });
  }

	render() {
		const { fullArticle } = this.state;
		return (
			<section>
				<NavBar />
				{(fullArticle)? 
				<div>
					<h4 className='white-text' style={{ fontWeight: 'bold' }}>{renderHTML(fullArticle.title)}</h4>
					<section className='white-text'>
						{(typeof fullArticle !== 'string') ? renderHTML(fullArticle.content) : <p className='white-text'>No contents available</p>}
					</section>
				</div> : <Spinner /> }
			</section>
		);
	}
}

export default ArticleDetails;