import { EventEmitter } from 'events';
import HeadlineActionTypes from '../constants/HeadlineActionTypes';
import HeadlineDispatcher from '../dispatcher/HeadlineDispatcher';

/**
 * Handles all article related actions and article related logic
 * @class HeadlineArticleStore
 * @extends {EventEmitter}
 */
class HeadlineArticleStore extends EventEmitter {
  /**
   * Creates an instance of HeadlineArticleStore.
   * sets the initial value of the articles field to an empty array
   * @memberof HeadlineArticleStore
   */
  constructor() {
    super();
    this.articles = [];
  }

  /**
   * retrieves the updated articles from the source
   * @returns object
   * @memberof HeadlineArticleStore
   */
  getAllArticles() {
    return this.articles;
  }

  /**
   * selects the right action to listen to and emit change events
   * correspondingly
   * @param {any} action mitted action from view
   * @memberof HeadlineArticleStore
   */
  handleActions(action) {
    if (action.type === HeadlineActionTypes.GET_ARTICLES) {
      this.articles = action.payload;
      this.emit('change');
    }
  }
}

const headlineArticleStore = new HeadlineArticleStore();
HeadlineDispatcher.register(headlineArticleStore.handleActions.bind(headlineArticleStore));

export default headlineArticleStore;

