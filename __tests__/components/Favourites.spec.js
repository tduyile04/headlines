import React from 'react';
import { shallow } from 'enzyme';
import Favourite from '../../src/js/components/partials/in/Favourite.jsx';
import FavouritesPage from
'../../src/js/components/favourites/FavouritesPage.jsx';

describe('<Favourite />', () => {
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
  it('should render the same <FavouritesPage /> each time', () => {
    const wrapper = shallow(<FavouritesPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
