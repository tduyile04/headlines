import { EventEmitter } from 'events';
import request from 'superagent';
import axios from 'axios';
import HeadlineActionTypes from '../constants/HeadlineActionTypes';
import HeadlineDispatcher from '../dispatcher/HeadlineDispatcher';

/**
 * 
 * 
 * @class HeadlineStore
 * @extends {EventEmitter}
 */
class HeadlineStore extends EventEmitter {
  /**
   * Creates an instance of HeadlineStore.
   * 
   * @memberOf HeadlineStore
   */
  constructor() {
    super();
    this.source = [];
    this.articles = [];
  }

  /**
   * 
   * 
   * @returns 
   * 
   * @memberOf HeadlineStore
   */
  getAllSources() {
    const url = 'https://newsapi.org/v1/sources?language=en&country=us&category=general';
    axios.get(url).then((response) => {
      const sources = response.body.sources;
      sources.forEach((newSource) => {
        this.source.push(newSource);
      }, this);
      return this.source;
    });
  }

  sourceSearch(query) {
    const url = 'https://newsapi.org/v1/sources?language=en&country=us&category=general';
    request.get(url).then((response) => {
      const sources = response.body.sources;
      this.source = sources.filter((newSource) => {
        return newSource.name.toLowerCase().indexOf(query) !== -1;
      });
    });
    this.emit('change');
  }

  getArticles(source) {
    const API_KEY = '213327409d384371851777e7c7f78dfe';
    const ORDER_BY = 'top';
    const ARTICLE_BASE_URL = 'http://newsapi.org/v1/articles';
    const url = ARTICLE_BASE_URL + '?source=' + source + '&sortBy=' + ORDER_BY + '&apiKey=' +
                API_KEY;
    // const url = `https://newsapi.org/v1/articles?source={source}&sortBy={ORDER_BY}&apiKey={API_KEY}`;
    axios.get(url).then((response) => {
      const articles = response.body.articles;
      articles.forEach((newArticle) => {
        this.articles.push(newArticle);
      });
    });
    this.emit('load');
  }

  getAllArticles() {
    return this.articles;
  }

  handleActions(action) {
    switch (action.type) {
      case HeadlineActionTypes.SEARCH_SOURCE:
        this.sourceSearch(action.query);
        break;
      case HeadlineActionTypes.GET_ARTICLES:
        this.getArticles(action.source);
        break;
    }
  }
}

const headlineStore = new HeadlineStore();
HeadlineDispatcher.register(headlineStore.handleActions.bind(headlineStore));

export default headlineStore;
