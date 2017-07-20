import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Favourite from '../../src/js/components/partials/in/Favourite.jsx';
import FavouritesPage from
'../../src/js/components/favourites/FavouritesPage.jsx';

describe('The Favourite component', () => {
  beforeEach(() => {
    const data = [{
      title: 'harry porter 10',
      url: 'http://localhost:8080/favourites',
      description: 'the story of harry porter'
    }];
    localStorage.setItem('saved-articles', JSON.stringify(data));
  });
  it('should display the same view for each render', () => {
    const wrapper = shallow(<Favourite />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render the same FavouritesPage component every time', () => {
    const wrapper = shallow(<FavouritesPage />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render the same Favourite component every time', () => {
    const favourite = {
      title: 'random title',
      description: 'a random description',
      url: 'http://localhost:8080/favourites'
    };
    const tree = renderer.create(
      <MemoryRouter><Favourite favourite={favourite} /></MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
