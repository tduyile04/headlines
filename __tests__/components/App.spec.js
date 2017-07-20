import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import App from '../../src/js/components/App.jsx';

describe('<App />', () => {
  const wrapper = shallow(<App />);

  it('should render the App component correctly', () => {
    expect(wrapper).toHaveLength(1);
  });
  xit('should render the same App component for every render', () => {
    const tree = renderer.create(
      <MemoryRouter><App /></MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should change the page of the sources', () => {
    wrapper.instance().changePage('hello');
    expect(wrapper.state().currentPage).toBe('hello');
  });
});
