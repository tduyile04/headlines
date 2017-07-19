import React from 'react';
import { shallow } from 'enzyme';
import EmptyNotification
from '../../src/js/components/partials/in/EmptyNotification.jsx';

describe('<EmptyNotification />', () => {
  it('renders 1 <EmptyNotification /> component', () => {
    const component = shallow(<EmptyNotification />);
    expect(component).toHaveLength(1);
  });
});
