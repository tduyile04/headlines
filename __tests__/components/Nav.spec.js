import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Nav from '../../src/js/components/partials/in/Nav.jsx';
import NavBar from '../../src/js/components/partials/in/NavBar.jsx';

describe('The Nav component', () => {
  it('should render correctly every time', () => {
    const wrapper = shallow(<Nav />);
    expect(wrapper).toHaveLength(1);
  });
  it('should return the expected user props', () => {
    const user = {
      name: 'jack doe',
      email: 'jackdoe@any.com',
      image: '/img/src/jack.jpg',
      idToken: '676tgybdy78h8e7ehue'
    };
    const wrapper = shallow(<Nav user={user} />);
    expect(wrapper.instance().props.user).toBe(user);
  });
  it('should render the Nav component correctly every time', () => {
    const userObject = {
      name: 'jack doe',
      email: 'jackdoe@any.com',
      image: '/img/src/jack.jpg',
      idToken: '676tgybdy78h8e7ehue'
    };
    const user = JSON.stringify(userObject);
    const tree = renderer.create(
      <MemoryRouter><Nav user={user} /></MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render the NavBar component correctly every time', () => {
    const userObject = {
      name: 'jack doe',
      email: 'jackdoe@any.com',
      image: '/img/src/jack.jpg',
      idToken: '676tgybdy78h8e7ehue'
    };
    const user = JSON.stringify(userObject);
    const tree = renderer.create(
      <MemoryRouter><NavBar user={user} /></MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
