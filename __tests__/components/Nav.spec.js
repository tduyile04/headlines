import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Nav from '../../src/js/components/partials/in/Nav.jsx';

describe('<Nav />', () => {
  it('should render 1 <Nav />', () => {
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
  // it('should render the same <LogInPage />', () => {
  //   const user = {
  //     name: 'jack doe',
  //     email: 'jackdoe@any.com',
  //     image: '/img/src/jack.jpg',
  //     idToken: '676tgybdy78h8e7ehue'
  //   };
  //   const tree = renderer.create(
  //     <MemoryRouter><Nav user={user} /></MemoryRouter>
  //   ).toJSON();
  //   expect(tree).toMatchSnapshot();
  // });
});
