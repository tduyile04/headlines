import React from 'react';
import { withRouter } from 'react-router-dom';
import { SideNav, SideNavItem } from 'react-materialize';

/**
 * SideBar displaying the user profile and user saved
 * articles in the favourites
 * @param {any} user user object containing the profile data
 * @returns
 */
function SideBar({ user }) {
  let userObject;
  try {
    userObject = JSON.parse(user);
  } catch (e) {
    userObject = {
      image: '../../../../images/jared.jpg',
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
        <SideNavItem subheader>Favourites</SideNavItem>
        <SideNavItem icon="cloud" href="/favourites">
          View Favourites
        </SideNavItem>
        <SideNavItem divider />
        <SideNavItem subheader>Recently Viewed Favourites</SideNavItem>
        <SideNavItem waves href="#!third">Still Random Post</SideNavItem>
      </SideNav>
    </span>
  );
}

export default withRouter(SideBar);
