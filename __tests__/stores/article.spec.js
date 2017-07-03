import HeadlineDispatcher from '../../src/js/dispatcher/HeadlineDispatcher';
import mockArticleAPI from '../../src/__mock__/articles.json';
import HeadlineArticleStore from '../../src/js/stores/HeadlineArticleStore';
import HeadlineActionType from '../../src/js/constants/HeadlineActionTypes';

jest.mock('../../src/js/dispatcher/HeadlineDispatcher');
describe('Headline Articles Store', () => {
  let callback;

  const articles = {
    type: HeadlineActionType.GET_ARTICLES,
    payload: mockArticleAPI
  };

  beforeEach(() => {
    callback = HeadlineDispatcher.register.mock.calls[0][0];
  });

  it('should register a call with the dispatcher', () => {
    expect(HeadlineDispatcher.register.mock.calls.length).toBe(1);
  });

  it('should initialize with no articles', () => {
    expect(HeadlineArticleStore.getAllArticles().length).toBe(0);
  });

  it('should return the appropriate result when called', () => {
    callback(articles);
    expect(HeadlineArticleStore.getAllArticles()).toEqual(mockArticleAPI);
  });
});