import React from 'react';
import { shallow } from 'enzyme';
import Spinner from '../../src/js/components/partials/in/Spinner.jsx';

describe('<Spinner />', () => {
  it('renders 1 <Spinner /> component', () => {
    const component = shallow(<Spinner />);
    expect(component).toHaveLength(1);
  });
});
