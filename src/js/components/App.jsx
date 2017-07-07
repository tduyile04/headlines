import React from 'react';
import { Redirect } from 'react-router-dom';
import { Pagination } from 'react-materialize';
import Nav from './partials/in/Nav.jsx';
import Spinner from './partials/in/Spinner.jsx';
import Footer from './partials/in/Footer.jsx';
import SelectedSources from './partials/in/SelectedSources.jsx';
import EmptyNotification from './partials/in/EmptyNotification.jsx';
import HeadlineSourceStore from '../stores/HeadlineSourceStore';
import HeadlineAction from '../actions/HeadlineAction';

/**
 * Parent Component for dashboard after user successful log in, detailing
 * a paginated list of news sources
 * @class App
 * @extends {React.Component}
 */
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      sources: '',
      sortOptions: [],
      currentPage: 1
    };
    this.getSources = this.getSources.bind(this);
    this.changePage = this.changePage.bind(this);
  }

  componentDidMount() {
    HeadlineAction.getSources();
    HeadlineSourceStore.on('change', this.getSources);
  }

  componentWillUnmount() {
    HeadlineSourceStore.removeListener('change', this.getSources);
  }

  /**
   * Retrieves and sets state with the filtered news sources from the store,
   * if search query is empty, then all news sources are retrieved
   * @memberof App
   */
  getSources() {
    this.setState({
      sources: HeadlineSourceStore.getAllSources()
    });
    if (!localStorage.getItem('totalSource')) {
      localStorage.setItem('totalSource', JSON.stringify(this.state.sources));
    }
  }

  /**
   * Changes the viewed page to the current page clicked
   * @param {any} currentPage
   * @memberof App
   */
  changePage(currentPage) {
    this.setState({
      currentPage
    });
  }

  render() {
    const user = localStorage.getItem('userProfile');
    if (!user) {
      return (
        <Redirect to="/"/>
      );
    }
    const { sources, currentPage } = this.state;
    const allSources = sources;
    const sourcePerPage = 9;
    const end = currentPage * sourcePerPage;
    const start = end - sourcePerPage;
    const displayedSources = allSources.slice(start, end);
    return (
      <div>
        <section className="page-wrap">
          <Nav user = {user}/>
          <h5
            className="orange-text text-accent-1 center-align"
          >
            News Sources
          </h5>
            {
              !allSources && (
                <Spinner />
              )
            }
          { allSources.length === 0 ?
            <EmptyNotification /> :
            <SelectedSources sources={displayedSources} />
          }
          <div className="center-align">
            {
              !!allSources && (
                  <Pagination
                    className = "white-text"
                    items={Math.ceil(sources.length / sourcePerPage)}
                    activePage={currentPage}
                    onSelect={current => this.changePage(current)}
                  />
              )
            }
          </div>
        </section>
        <Footer className="page-footer" />
      </div>
    );
  }
}

export default App;
