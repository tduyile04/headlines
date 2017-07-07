import React from 'react';
import { shallow } from 'enzyme';
import SideBar from '../../src/js/components/partials/in/SideBar.jsx';

describe('<SideBar />', () => {
  it('should render 1 <SideBar />', () => {
    const wrapper = shallow(<SideBar />);
    expect(wrapper).toHaveLength(1);
  });
  it('should display the same view for each render', () => {
    const wrapper = shallow(<SideBar />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should return the expected user props', () => {
    const user = {
      name: 'jack doe',
      email: 'jackdoe@any.com',
      image: '/img/src/jack.jpg',
      idToken: '676tgybdy78h8e7ehue'
    };
    const wrapper = shallow(<SideBar user={user} />);
    expect(wrapper.instance().props.user).toBe(user);
  });
});
