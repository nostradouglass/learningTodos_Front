import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import firebase from "firebase/app";

import "firebase/auth";
type navProps = {
  children: React.ReactNode;
};

const NavHeader = (props: navProps) => {
  const auth = firebase.auth();

  const [redirect, setRedirect] = useState(false);

  const logoutClicked = () => {
    var user = auth.currentUser;
    if (user) {
      auth.signOut().then(() => {
        setRedirect(true);
      });
    }
  };

  if (redirect) {
    return <Redirect to="/" />;
  } else {
    return (
      <div>
        <nav>
          <div className="nav-wrapper blue darken-2">
            <h4 onClick={() => setRedirect(true)} className="homeLink left">
              KellyDouglass.com
            </h4>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <Link to="/mongo">Todo List (Mongo)</Link>
              </li>
              <button
                onClick={logoutClicked}
                className="waves-effect waves-light btn-small blue lighten-4 blue-text text-darken-2 logoutButton"
              >
                Logout
              </button>
              {/* <li>
                <Link to="/postgres">Todo List (Sql)</Link>
              </li> */}
            </ul>
          </div>
        </nav>
        {props.children}
      </div>
    );
  }
};

export default NavHeader;
