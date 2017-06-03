import HeadlineActionTypes from '../constants/HeadlineActionTypes';
import HeadlineDispatcher from '../dispatcher/HeadlineDispatcher';

const Actions = {
  searchSources(query) {
    HeadlineDispatcher.dispatch({
      type: HeadlineActionTypes.SEARCH_SOURCE,
      query
    });
  },
  getArticles(sourceName) {
    HeadlineDispatcher.dispatch({
      type: HeadlineActionTypes.GET_ARTICLES,
      sourceName
    });
  }
};

export default Actions;
