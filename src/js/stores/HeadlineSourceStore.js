import { EventEmitter } from 'events';
import HeadlineActionTypes from '../constants/HeadlineActionTypes';
import HeadlineDispatcher from '../dispatcher/HeadlineDispatcher';

/**
 * Handles sources retrieval and source streamlining logic
 * @class HeadlineStore
 * @extends {EventEmitter}
 */
class HeadlineSourceStore extends EventEmitter {
  /**
   * Creates an instance of HeadlineStore.
   * @memberOf HeadlineStore
   */
  constructor() {
    super();
    this.sources = [];
    this.filteredSources = [];
  }

  /**
   * retrieves all data sources
   * @returns array
   * @memberof HeadlineSourceStore
   */
  getAllSources() {
    return this.sources;
  }

  /**
   * retrieves a streamlined source data based on the query
   * @param {any} query search query
   * @returns array
   * @memberof HeadlineSourceStore
   */
  getFilteredSource(query) {
    let totalSource = JSON.parse(localStorage.getItem('totalSource'));
    if (!totalSource) {
      totalSource = this.getAllSources();
    }
    if (!query || query === '') {
      return totalSource;
    }
    this.sources = totalSource.filter((source) => {
      return source.name
        .toLowerCase()
        .trim()
        .indexOf(query.toLowerCase().trim()) !== -1;
    });
    return this.sources;
  }

  /**
   * selects the right action to listen to and emit change events
   * correspondingly
   * @param {any} action emitted action from view
   * @memberof HeadlineSourceStore
   */
  handleActions(action) {
    switch (action.type) {
    case HeadlineActionTypes.GET_SOURCES:
      this.sources = action.payload;
      this.emit('change');
      break;
    case HeadlineActionTypes.SEARCH_SOURCES:
      this.getFilteredSource(action.payload);
      this.emit('change');
      break;
    default:
    }
  }
}

const headlineSourceStore = new HeadlineSourceStore();
HeadlineDispatcher
  .register(headlineSourceStore.handleActions.bind(headlineSourceStore));

export default headlineSourceStore;
