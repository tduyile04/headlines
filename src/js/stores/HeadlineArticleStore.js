import { EventEmitter } from 'events';
import HeadlineActionTypes from '../constants/HeadlineActionTypes';
import HeadlineDispatcher from '../dispatcher/HeadlineDispatcher';

class HeadlineArticleStore extends EventEmitter {
  constructor() {
    super();
    this.articles = [];
  }

  getAllArticles() {
    return this.articles;
  }

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

