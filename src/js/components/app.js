import React from 'react';
import request from 'superagent';
import Nav from './partials/in/header';
import Spinner from './partials/in/spinner';
import Slider from './partials/in/slider';
import Sources from './partials/in/sources';
import HeadlineStore from '../stores/HeadlineStore';
import HeadlineAction from '../actions/HeadlineAction';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			sources: ''
		}
		this.searchSources = this.searchSources.bind(this);
	} 

	componentWillMount() {
		const url = 'https://newsapi.org/v1/sources?language=en&country=us&category=general';
    request.get(url).then((response) => {
      const sources = response.body.sources;
			this.setState({
				sources
			})
		});
		HeadlineStore.on('change', () => {
			if(HeadlineStore.source) {
				this.setState({
					sources: HeadlineStore.source
				});
			}
		});
	}

	searchSources(query) {
		HeadlineAction.searchSources(query);
	}

	render() {
		const {sources} = this.state;
		return (
			<div>
				<Nav searchSources = {this.searchSources} />
				<Slider />
				<section>
					<h5 className='orange-text text-accent-1 center-align'>headlines news sources</h5>
						{
							!this.state.sources && (
								<Spinner />
							)
						}
					<div className="row">
						{
							!!this.state.sources && (
								<Sources sources = {sources} />
								)
						}
					</div>
				</section>
			</div>
		);
	}
}

export default App;
