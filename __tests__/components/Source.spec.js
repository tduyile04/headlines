import React from 'react';
import { shallow } from 'enzyme';
import Source from '../../src/js/components/partials/in/Source.jsx';
import Sources from '../../src/js/components/partials/in/Sources.jsx';
import mockSources from '../../src/__mock__/sources.json';

describe('<Source />', () => {
  it('should display the same view for each render', () => {
    const wrapper = shallow(<Source />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render 1 <Sources />', () => {
    const sources = mockSources.sources;
    const wrapper = shallow(<Sources sources={sources}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
