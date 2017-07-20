import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Source from '../../src/js/components/partials/in/Source.jsx';
import Sources from '../../src/js/components/partials/in/Sources.jsx';
import mockSources from '../../src/__mock__/sources.json';

describe('The Source component', () => {
  it('should display the same view for each render', () => {
    const wrapper = shallow(<Source />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render the Source component correctly', () => {
    const sources = mockSources.sources;
    const wrapper = shallow(<Sources sources={sources}/>);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render the correct article sources', () => {
    const sources = mockSources.sources;
    const wrapper = shallow(<Sources sources={sources} />);
    expect(
      wrapper
      .props('sources')
      .children[0]
      .props
      .source
      ).toEqual(sources[0]);
  });

  it('should display correctly everytime for the Sources component', () => {
    const sources = mockSources.sources;
    const tree = renderer.create(
      <MemoryRouter><Sources sources={sources} /></MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should display correctly everytime for the Source component', () => {
    const source = mockSources.sources[0];
    const tree = renderer.create(
      <MemoryRouter><Source source={source} /></MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
