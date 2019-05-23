import React from "react";
import { Route, Redirect } from "react-router-dom";

/**
 * Requirements:
 * 1. It has to have the same API as <Route />
 * 2. it renders <Route /> and passes all the props through it.
 * 3. It checks if the user is authenticated, if they are, it renders the "component" prop. If not, it redirects the user back to /login
 */
// localStorage.token
const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        if (localStorage.getItem("token")) {
          return <Component />;
        } // redirect
        console.log("Failed to login; Redirecting!!!");
        return <Redirect to="/login" />;
      }}
    />
  );
};

export default PrivateRoute;
