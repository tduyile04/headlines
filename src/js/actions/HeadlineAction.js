import HeadlineActionTypes from '../constants/HeadlineActionTypes';
import HeadlineDispatcher from '../dispatcher/HeadlineDispatcher';
import API from '../utils/HeadlineAPI';
import mercuryAPI from '../utils/ArticleScraperAPI';

class HeadlineActions {
  static getSources() {
    return API.getSources().then((sources) => {
      HeadlineDispatcher.dispatch({
        type: HeadlineActionTypes.GET_SOURCES,
        payload: sources
      });
    });
  }

  static searchSources(query) {
    HeadlineDispatcher.dispatch({
      type: HeadlineActionTypes.SEARCH_SOURCES,
      payload: query
    });
  }

  static getArticles(source, sortBy) {
    return API.getHeadlines(source, sortBy).then((articles) => {
      HeadlineDispatcher.dispatch({
        type: HeadlineActionTypes.GET_ARTICLES,
        payload: articles
      });
    });
  }

  static getArticleDetail(url) {
    return mercuryAPI.getArticleDetail(url).then((article) => {
      HeadlineDispatcher.dispatch({
        type: HeadlineActionTypes.GET_ARTICLE_DETAILS,
        payload: article
      });
    });
  }
}

export default HeadlineActions;
