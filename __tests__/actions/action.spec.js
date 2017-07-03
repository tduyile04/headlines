import sinon from 'sinon';
import HeadlineAction from '../../src/js/actions/HeadlineAction';
import HeadlineAPI from '../../src/js/utils/HeadlineAPI';
import HeadlineDispatcher from '../../src/js/dispatcher/HeadlineDispatcher';
import mockSources from '../../src/__mock__/sources.json';
import mockArticles from '../../src/__mock__/articles.json';

jest.mock('../../src/js/utils/HeadlineAPI', () => ({
  getSources: () => Promise.resolve({ sources: mockSources.sources }),
  getHeadlines: () => Promise.resolve({ articles: mockArticles.articles })
}));

describe('When Actions', () => {
  let DispatcherMock;
  const ApiGetSources = sinon.spy(HeadlineAPI, 'getSources');
  const ApiGetArticles = sinon.spy(HeadlineAPI, 'getHeadlines');

  beforeEach(() => {
    DispatcherMock = sinon.spy(HeadlineDispatcher, 'dispatch');
  });
  afterEach(() => {
    DispatcherMock.restore();
  });

  describe('Action,', () => {
    describe('get sources and articles method', () => {
      it('getSources is called, ApiGetSources to be called', () => {
        HeadlineAction.getSources();
        expect(ApiGetSources.called).toBeTruthy();
      });
      it('getArticles is called with two parameter, ApiGetArticles to be called'
      , () => {
        HeadlineAction.getArticles('cnn', 'top');
        expect(ApiGetArticles.called).toBeTruthy();
      });
      it('getArticles is called with one parameter, ApiGetArticles to be called'
      , () => {
        HeadlineAction.getArticles('cnn');
        expect(ApiGetArticles.called).toBeTruthy();
      });
    });
  });
});
