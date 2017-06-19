import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import App from '../../js/components/app';

describe('Header', () => {
  const wrapper = shallow(<App />);
  const spyWillMount = sinon.spy(App.prototype, 'componentWillMount');
  const spyWillUnmount = sinon.spy(App.prototype, 'componentWillUnmount');
  const spyWillUpdateState = sinon.spy(App.prototype, 'updateState');


  test('componentWillMount should be called before mount', () => {
    wrapper.instance().componentWillMount();
    expect(spyWillMount.calledOnce).toBe(true);
  });

  test('updateState should be called ', () => {
    wrapper.instance().updateState();
    expect(spyWillUpdateState.calledOnce).toBe(false);
  });

  test('should have no state', () => {
    expect(wrapper.state().auth).toBeNull();
  });

  test('should declare 2 routes', () => {
    expect(wrapper.find('Route')).toHaveLength(2);
  });

  test('should declare 1 Router', () => {
    expect(wrapper.find('Router')).toHaveLength(0);
  });

  test('should have 2 div tags', () => {
    expect(wrapper.find('div')).toHaveLength(2);
  });

  test('componentWillUnmount should be called when component is unmounted', () => {
    wrapper.unmount();
    expect(spyWillUnmount.calledOnce).toBe(true);
  });
});