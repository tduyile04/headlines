import React from 'react';
import { SideNav, SideNavItem } from 'react-materialize';
import { withRouter } from 'react-router-dom';

/**
 * Transports from current page to the favourites page
 */
function goToFavourites({ history }) {
  history.push('/favourites');
}

/**
 * SideBar displaying the user profile and user saved
 * articles in the favourites
 * @param {any} user user object containing the profile data
 * @returns {component}
 */
function SideBar({ user, history }) {
  let userObject;
  try {
    userObject = JSON.parse(user);
  } catch (e) {
    userObject = {
      image: '../../../../images/login2.jpg',
      name: 'anonymous',
      email: 'anonymous@unknown.com'
    };
  }
  return (
    <span className="grey darken-3 sidebtn">
      <SideNav
        trigger={
          <span
          className="grey darken-3">
            <i className="material-icons white-text sidebtn">menu</i>
          </span>
        }
        options={{ closeOnClick: true }}
        >
        <SideNavItem userView
          user={{
            background: '../../../../images/cloudsidebar.jpg',
            image: userObject.image,
            name: userObject.name,
            email: userObject.email
          }}
        />
        <SideNavItem
          onClick={() => goToFavourites({ history })}
        >
          View Favourites
        </SideNavItem>
        <SideNavItem divider />
      </SideNav>
    </span>
  );
}

export default withRouter(SideBar);
