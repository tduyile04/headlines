import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../../src/js/components/partials/in/Footer.jsx';

describe('<Footer />', () => {
  it('should render 1 <Footer />', () => {
    const component = shallow(<Footer />);
    expect(component).toHaveLength(1);
  });
});
