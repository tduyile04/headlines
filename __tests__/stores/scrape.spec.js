import HeadlineDispatcher from '../../src/js/dispatcher/HeadlineDispatcher';
import HeadlineScrapeStore from '../../src/js/stores/HeadlineScrapeStore';
import HeadlineActionTypes from '../../src/js/constants/HeadlineActionTypes';

jest.mock('../../src/js/dispatcher/HeadlineDispatcher');
describe('Headline Scrape Store', () => {
  let callback;

  const fullArticle = {
    type: HeadlineActionTypes.GET_FULL_ARTICLE,
    payload: ''
  };
  beforeEach(() => {
    callback = HeadlineDispatcher.register.mock.calls[0][0];
  });
  afterEach(() => {
    HeadlineScrapeStore.fullArticle = '';
  });
  it('should register a call with the dispatcher', () => {
    expect(HeadlineDispatcher.register.mock.calls.length).toBe(1);
  });
  it('should scrape article data when called', () => {
    callback(fullArticle);
    expect(HeadlineScrapeStore.getFullArticle()).toBeDefined();
  });
  it('should declare empty fullArticle', () => {
    expect(HeadlineScrapeStore.fullArticle).toEqual('');
  });
  it('should call the function that fetches sources from api', () => {
    const action = { type: 'GET_FULL_ARTICLE', payload: 'I am an article' };
    HeadlineScrapeStore.handleActions(action);
    expect(HeadlineScrapeStore.fullArticle.length).not.toBe(0);
  });
  it('shouldn\'t call the function that fetches articles from api', () => {
    const action = { type: 'DON\'T_CALL', payload: 'I am an article' };
    HeadlineScrapeStore.handleActions(action);
    expect(HeadlineScrapeStore.fullArticle.length).toBe(0);
    expect(HeadlineScrapeStore.fullArticle).toEqual('');
  });
});
