import React from 'react';
import renderHTML from 'react-render-html';
import NavBar from '../partials/in/header-detail';
import Spinner from '../partials/in/spinner';
import HeadlineActions from '../../actions/HeadlineAction';
import HeadlineScrapeStore from '../../stores/HeadlineScrapeStore';

/**
 * Component displaying scraped data from the original news source site
 * @class ArticleDetails
 * @extends {React.Component}
 */
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

	/**
	 * Retrieves full scraped data from the store and re-sets state
	 * accordingly
	 * @memberof ArticleDetails
	 */
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