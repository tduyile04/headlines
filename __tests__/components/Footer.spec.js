import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../../src/js/components/partials/in/Footer.jsx';

describe('The Footer component', () => {
  it('should render correctly every time', () => {
    const component = shallow(<Footer />);
    expect(component).toHaveLength(1);
  });
});
