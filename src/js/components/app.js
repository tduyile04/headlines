import React from 'react';
import request from 'superagent';
import { Pagination } from 'react-materialize'
import Nav from './partials/in/header';
import Spinner from './partials/in/spinner';
import Slider from './partials/in/slider';
import Sources from './partials/in/sources';
import HeadlineSourceStore from '../stores/HeadlineSourceStore';
import HeadlineAction from '../actions/HeadlineAction';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			sources: '',
			sortOptions: [],
			currentPage: 1
		}
		this.getSources = this.getSources.bind(this);
		this.changePage = this.changePage.bind(this);
	} 

	componentWillMount() {
		HeadlineAction.getSources();
		HeadlineSourceStore.on('change', this.getSources);
	}

	componentWillUnmount() {
		HeadlineSourceStore.removeListener('change', this.getSources);
	}

	getSources() {
		this.setState({
			sources: HeadlineSourceStore.getFilteredSource()
		});
		const { sources } = this.state;
	}

	changePage(currentPage) {
    this.setState({
      currentPage
    });
  }

	render() {
		const user = localStorage.getItem('userProfile');
		const { sources, currentPage } = this.state;
		let allSources = sources;
		const totalSources = allSources.length;
		const sourcePerPage = 6;
		let end = currentPage * sourcePerPage;
		let start = end - sourcePerPage;

		allSources = allSources.slice(start, end);

		const selectedSources = (
			<div className='row'>
				<Sources sources = {allSources} />
			</div>
		);

		const emptyNotification = (
			<div className='center-align'>
				<h4 className='white-text'>No source found that matches this query</h4>
			</div>
		);

		return (
			<div>
				<Nav user = {user}/>
				<Slider />
				<section>
					<h5 className='orange-text text-accent-1 center-align'>headlines news sources</h5>
						{
							!allSources && (
								<Spinner />
							)
						}
					<div className="right-align">
						{
							!!allSources && (
									<Pagination
										className = 'white-text'
										items={Math.ceil(sources.length / sourcePerPage)}
										activePage={currentPage}
										onSelect={current => this.changePage(current)}
									/>
							)
						}
					</div>
					{ allSources.length === 0 ? emptyNotification : selectedSources }
				</section>
			</div>
		);
	}
}

export default App;
