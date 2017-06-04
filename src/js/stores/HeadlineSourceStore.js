import { EventEmitter } from 'events';
import HeadlineActionTypes from '../constants/HeadlineActionTypes';
import HeadlineDispatcher from '../dispatcher/HeadlineDispatcher';

/**
 * 
 * 
 * @class HeadlineStore
 * @extends {EventEmitter}
 */
class HeadlineSourceStore extends EventEmitter {
  /**
   * Creates an instance of HeadlineStore.
   * 
   * @memberOf HeadlineStore
   */
  constructor() {
    super();
    this.sources = [];
    this.filteredSources = [];
  }

  getAllSources() {
    return this.sources;
  }

  getFilteredSource(query) {
    const totalSource = this.getAllSources();
    if (!query) {
      return totalSource;
    }
    this.filteredSources = totalSource.filter((source) => {
      return source.name.toLowerCase().trim().indexOf(query.toLowerCase().trim()) !== -1;
    });
    return this.filteredSources;
  }

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
    }
  }
}

const headlineSourceStore = new HeadlineSourceStore();
HeadlineDispatcher.register(headlineSourceStore.handleActions.bind(headlineSourceStore));

export default headlineSourceStore;
