import React from 'react';
import { Redirect } from 'react-router-dom';
import { Pagination } from 'react-materialize';
import Nav from './partials/in/Nav.jsx';
import Spinner from './partials/in/Spinner.jsx';
import Footer from './partials/in/Footer.jsx';
import Sources from './partials/in/Sources.jsx';
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

  componentWillMount() {
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
      sources: HeadlineSourceStore.getFilteredSource()
    });
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
    let allSources = sources;
    const sourcePerPage = 9;
    const end = currentPage * sourcePerPage;
    const start = end - sourcePerPage;

    allSources = allSources.slice(start, end);

    const selectedSources = (
      <div className="row source-container">
        <Sources sources = {allSources} />
      </div>
    );

    const emptyNotification = (
      <div className="center-align">
        <h4 className="white-text">No source found that matches this query</h4>
      </div>
    );

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
          { allSources.length === 0 ? emptyNotification : selectedSources }
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
