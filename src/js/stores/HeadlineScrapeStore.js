import { EventEmitter } from 'events';
import HeadlineActionTypes from '../constants/HeadlineActionTypes';
import HeadlineDispatcher from '../dispatcher/HeadlineDispatcher';

class HeadlineScrapeStore extends EventEmitter {
  construtor() {
    this.fullArticle = '';
  }

  getFullArticle() {
    return this.fullArticle;
  }

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
