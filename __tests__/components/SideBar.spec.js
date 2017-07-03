import React from 'react';
import { shallow } from 'enzyme';
import SideBar from '../../src/js/components/partials/in/SideBar.jsx';

describe('<SideBar />', () => {
  it('should render 1 <SideBar />', () => {
    const wrapper = shallow(<SideBar />);
    expect(wrapper).toHaveLength(1);
  });
});
