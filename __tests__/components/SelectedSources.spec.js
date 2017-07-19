import React from 'react';
import { shallow } from 'enzyme';
import SelectedSources
from '../../src/js/components/partials/in/SelectedSources.jsx';

describe('<SelectedSources />', () => {
  it('renders 1 <SelectedSources /> component', () => {
    const component = shallow(<SelectedSources />);
    expect(component).toHaveLength(1);
  });
});
