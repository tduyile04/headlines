import React from 'react';
import { shallow } from 'enzyme';
import Spinner from '../../src/js/components/partials/in/Spinner.jsx';

describe('The Spinner component', () => {
  it('should render correctly everytime', () => {
    const component = shallow(<Spinner />);
    expect(component).toHaveLength(1);
  });
});
