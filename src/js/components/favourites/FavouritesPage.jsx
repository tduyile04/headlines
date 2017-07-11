import React from 'react';
import Favourite from '../partials/in/Favourite.jsx';
import NavBar from '../partials/in/NavBar.jsx';
import Footer from '../partials/in/Footer.jsx';


/**
 * Page displaying all the articles added to the collection
 * @returns {component}
 */
function FavouritesPage() {
  const user = localStorage.getItem('userProfile');
  const stringTypeFavourites = localStorage.getItem('saved-articles');
  const Favourites = JSON.parse(stringTypeFavourites);
  return (
      <div>
        <NavBar user={user} />
        <h4
          className="orange-text text-accent-1"
          style={{ 'padding-left': '10px' }}
        >
          Archives
        </h4>
        <div className="row">
        {
          !Favourites && (
            <div>
              <h4 className="white-text">No Favourites Added yet</h4>
            </div>
          )
        }
        {
          Favourites.map((favourite, index) => {
            return <Favourite key={index} favourite={favourite} />;
          }, this)
        }
        </div>
        <Footer />
      </div>
  );
}

export default FavouritesPage;
