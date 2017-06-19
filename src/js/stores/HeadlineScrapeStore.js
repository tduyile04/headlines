import { EventEmitter } from 'events';
import HeadlineActionTypes from '../constants/HeadlineActionTypes';
import HeadlineDispatcher from '../dispatcher/HeadlineDispatcher';

/**
 * Handles data scraping and related logic
 * @class HeadlineArticleStore
 * @extends {EventEmitter}
 */
class HeadlineScrapeStore extends EventEmitter {
  construtor() {
    this.fullArticle = '';
  }

  /**
   * retrieves the scraped data for each article
   * @returns object
   * @memberof HeadlineScrapeStore
   */
  getFullArticle() {
    return this.fullArticle;
  }
  /**
   * selects the right action to listen to and emit change events
   * correspondingly
   * @param {any} action emitted action from view
   * @memberof HeadlineScrapeStore
   */
  handleActions(action) {
    if (action.type === HeadlineActionTypes.GET_FULL_ARTICLE) {
      this.fullArticle = action.payload;
      this.emit('change');
    }
  }
}

const headlineScrapeStore = new HeadlineScrapeStore();
HeadlineDispatcher.register(headlineScrapeStore.handleActions.bind(headlineScrapeStore));

export default headlineScrapeStore;
