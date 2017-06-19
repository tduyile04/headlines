import HeadlineSourceStore from '../../js/stores/HeadlineSourceStore';
import HeadlineDispatcher from '../../js/dispatcher/HeadlineDispatcher';
import HeadlineAction from '../../js/actions/HeadlineAction';

describe('HeadlineAction', () => {
  describe('HeadlineSourceStore', () => {
    test('initializes with no auth', () => {
      const result = [];
      expect(HeadlineSourceStore.getAllSources()).toEqual(result);
    });

    test('gets data from sources', () => {
      HeadlineAction.getSouces();
      HeadlineDispatcher.dispatch({
        type: 'GET_AUTH',
        query: 'query',
      });
      expect(HeadlineSourceStore.getAllSources()).toEqual('query');
    });
  });
});
