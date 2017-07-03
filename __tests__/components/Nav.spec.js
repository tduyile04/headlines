import React from 'react';
import { shallow } from 'enzyme';
import Nav from '../../src/js/components/partials/in/Nav.jsx';

describe('<Nav />', () => {
  it('should render 1 <Nav />', () => {
    const wrapper = shallow(<Nav />);
    expect(wrapper).toHaveLength(1);
  });
});
