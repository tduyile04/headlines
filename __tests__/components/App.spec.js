import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import App from '../../src/js/components/App.jsx';


describe('<App />', () => {
  it('should render 1 <App />', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toHaveLength(1);
  });
  it('should render 1 <ArticleDetailsPage />', () => {
    const tree = renderer.create(
      <MemoryRouter><App /></MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
