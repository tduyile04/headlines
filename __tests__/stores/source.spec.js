import HeadlineDispatcher from '../../src/js/dispatcher/HeadlineDispatcher';
import mockSourceAPI from '../../src/__mock__/sources.json';
import HeadlineSourceStore from '../../src/js/stores/HeadlineSourceStore';
import HeadlineActionType from '../../src/js/constants/HeadlineActionTypes';

jest.mock('../../src/js/dispatcher/HeadlineDispatcher');
describe('Headline Sources Store', () => {
  let callback;

  const sources = {
    type: HeadlineActionType.GET_SOURCES,
    payload: mockSourceAPI.sources
  };

  const search = {
    type: HeadlineActionType.SEARCH_SOURCES,
    payload: 'network'
  };

  beforeEach(() => {
    callback = HeadlineDispatcher.register.mock.calls[0][0];
  });

  it('should register a call with the dispatcher', () => {
    expect(HeadlineDispatcher.register.mock.calls.length).toBe(1);
  });

  it('should initialize with no sources', () => {
    expect(HeadlineSourceStore.getAllSources().length).toBe(0);
  });

  it('should return the appropriate result when called', () => {
    callback(sources);
    expect(HeadlineSourceStore.getAllSources()).toEqual(mockSourceAPI.sources);
  });
  it('should return the search result based on the query', () => {
    callback(sources);
    expect(HeadlineSourceStore
    .getFilteredSource(search.payload).length
    ).toEqual(0);
  });
  it('should return the whole data if no query is supplied', () => {
    callback(sources);
    expect(HeadlineSourceStore.getFilteredSource('').length).toEqual(4);
  });
});
