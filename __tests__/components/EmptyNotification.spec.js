import React from 'react';
import { shallow } from 'enzyme';
import EmptyNotification
from '../../src/js/components/partials/in/EmptyNotification.jsx';

describe('EmptyNotification component', () => {
  it('renders correctly for each render', () => {
    const component = shallow(<EmptyNotification />);
    expect(component).toHaveLength(1);
  });
});
