import { EventEmitter } from 'events';
import HeadlineActionTypes from '../constants/HeadlineActionTypes';
import HeadlineDispatcher from '../dispatcher/HeadlineDispatcher';

class HeadlineArticleStore extends EventEmitter {
  constructor() {
    super();
    this.articles = [];
    this.articleDetail = '';
  }

  getAllArticles() {
    return this.articles;
  }

  getArticleDetail() {
    return this.articleDetail;
  }

  handleActions(action) {
    if (action.type === HeadlineActionTypes.GET_ARTICLES) {
      this.articles = action.payload;
      this.emit('change');
    }
    if (action.type === HeadlineActionTypes.GET_ARTICLE_DETAILS) {
      this.articleDetail = action.payload;
      this.emit('change');
    }
  }
}

const headlineArticleStore = new HeadlineArticleStore();
HeadlineDispatcher.register(headlineArticleStore.handleActions.bind(headlineArticleStore));

export default headlineArticleStore;

