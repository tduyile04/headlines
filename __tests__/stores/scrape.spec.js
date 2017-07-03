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

  it('should register a call with the dispatcher', () => {
    expect(HeadlineDispatcher.register.mock.calls.length).toBe(1);
  });

  it('should initialize with no articles scraped', () => {
    expect(HeadlineScrapeStore.getFullArticle()).not.toBeDefined();
  });
  it('should scrape article data when called', () => {
    callback(fullArticle);
    expect(HeadlineScrapeStore.getFullArticle()).toBeDefined();
  });
});
