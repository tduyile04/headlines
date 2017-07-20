import HeadlineActionTypes from '../constants/HeadlineActionTypes';
import HeadlineDispatcher from '../dispatcher/HeadlineDispatcher';
import HeadlineAPI from '../utils/HeadlineAPI';
import mercuryAPI from '../utils/ArticleScraperAPI';

/**
 * Gives a list of all the actions initiatde by the view
 * @class HeadlineActions
 */
class HeadlineActions {

  /**
   * Initiated action to retrieve all news sources from the api
   * dipatched to the store handling the corresponding action
   * @static
   * @returns object
   * @memberof HeadlineActions
   */
  static getSources() {
    return HeadlineAPI.getSources().then((sources) => {
      HeadlineDispatcher.dispatch({
        type: HeadlineActionTypes.GET_SOURCES,
        payload: sources
      });
    });
  }

  /**
   * Initiated action to search through news sources, receiving a
   * query from the view and dispatched to the store
   * @static
   * @param {any} query news source search query
   * @memberof HeadlineActions
   */
  static searchSources(query) {
    HeadlineDispatcher.dispatch({
      type: HeadlineActionTypes.SEARCH_SOURCES,
      payload: query
    });
  }

  /**
   * Initiated action to retrieve all news articles from selected news sources
   * in the right sort order
   * @static
   * @param {any} source news source
   * @param {any} sortBy sort order of the articles: top, popular etc.
   * @returns object
   * @memberof HeadlineActions
   */
  static getArticles(source, sortBy) {
    return HeadlineAPI.getHeadlines(source, sortBy).then((articles) => {
      HeadlineDispatcher.dispatch({
        type: HeadlineActionTypes.GET_ARTICLES,
        payload: articles
      });
    });
  }

  /**
   * Initiated action to scrape news data from the original website
   * and dispatch to the store
   * @static
   * @param {any} url the address for the complete article read
   * @returns object
   * @memberof HeadlineActions
   */
  static showFullArticle(url) {
    return mercuryAPI.scrapeArticle(url).then((article) => {
      HeadlineDispatcher.dispatch({
        type: HeadlineActionTypes.GET_FULL_ARTICLE,
        payload: article
      });
    });
  }
}

export default HeadlineActions;
