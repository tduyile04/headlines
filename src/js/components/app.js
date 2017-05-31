import React from 'react';
import request from 'superagent';
import Nav from './partials/in/header';
import Slider from './partials/in/slider';
import Sources from './partials/in/sources';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			source: ''
		};
	}

	componentDidMount() {
		const url = 'https://newsapi.org/v1/sources?language=en&country=us&category=general';
		request
		.get(url)
		.then((response) => {
			this.setState({
				source: response
			});
			console.log(this.state.source);
		});
	}

	render() {
		const newsSource = this.state.source.body.sources;
		if (!this.state.source) {
			return (
				<div>
					<Nav />
					<Slider />
					<section>
						<h5 className='orange-text text-accent-1 center-align'>headlines news sources</h5>
						<aside>
							Loading...
						</aside>
					</section>
				</div>
			);
		}
		return (
			<div>
				<Nav />
				<Slider />
				<section>
					<h5 className='orange-text text-accent-1 center-align'>headlines news sources</h5>
					<div className="row">
						<Sources sources = {newsSource}/>
					</div>
				</section>
			</div>
		);
	}
}

export default App;