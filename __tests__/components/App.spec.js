import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import App from '../../src/js/components/App.jsx';

describe('<App />', () => {
  const wrapper = shallow(<App />);

  it('should render 1 <App />', () => {
    expect(wrapper).toHaveLength(1);
  });
  it('should render 1 <ArticleDetailsPage />', () => {
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
