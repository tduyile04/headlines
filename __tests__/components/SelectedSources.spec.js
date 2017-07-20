import React from 'react';
import { shallow } from 'enzyme';
import SelectedSources
from '../../src/js/components/partials/in/SelectedSources.jsx';

describe('The SelectedSources component', () => {
  it('should render correctly every time', () => {
    const component = shallow(<SelectedSources />);
    expect(component).toHaveLength(1);
  });
});
