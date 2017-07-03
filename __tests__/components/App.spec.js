import React from 'react';
import { shallow } from 'enzyme';
import App from '../../src/js/components/App.jsx';


describe('<App />', () => {
  it('should render 1 <App />', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toHaveLength(1);
  });
});
