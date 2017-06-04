import React from 'react';
import request from 'superagent';
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
			sources: ''
		}
		this.getSources = this.getSources.bind(this);
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
	}

	render() {
		const { sources } = this.state;
		return (
			<div>
				<Nav />
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
