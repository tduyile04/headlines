import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
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
  it('should render the article sources', () => {
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

  it('should display the sources', () => {
    const sources = mockSources.sources;
    const tree = renderer.create(
      <MemoryRouter><Sources sources={sources} /></MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should display the sources', () => {
    const source = mockSources.sources[0];
    const tree = renderer.create(
      <MemoryRouter><Source source={source} /></MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
