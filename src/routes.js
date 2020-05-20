import React from 'react';
import { Redirect } from "react-router-dom";
import { Route } from 'react-router-dom';

import { isUserAuthenticated, getLoggedInUser } from './helpers/authUtils';

// lazy load all the views
const Dashboard = React.lazy(() => import('./pages/dashboards/'));
const Dashboard2 = React.lazy(() => import('./pages/dashboards/Dashboard2'));

const Inbox = React.lazy(() => import('./pages/sample/Inbox'));
const KanbanBoard = React.lazy(() => import('./pages/sample/KanbanBoard'));
const Contacts = React.lazy(() => import('./pages/sample/Contacts'));

// auth
const Login = React.lazy(() => import('./pages/auth/Login'));
const Logout = React.lazy(() => import('./pages/auth/Logout'));
const ForgetPassword = React.lazy(() => import('./pages/account/ForgetPassword'));
const Register = React.lazy(() => import('./pages/account/Register'));
const ConfirmAccount = React.lazy(() => import('./pages/account/Confirm'));

// handle auth and authorization

const PrivateRoute = ({ component: Component, roles, ...rest }) => (
  <Route {...rest} render={props => {
    const isAuthTokenValid = isUserAuthenticated();
    if (!isAuthTokenValid) {
      // not logged in so redirect to login page with the return url
      return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    }

    const loggedInUser = getLoggedInUser();
    // check if route is restricted by role
    if (roles && roles.indexOf(loggedInUser.role) === -1) {
      // role not authorised so redirect to home page
      return <Redirect to={{ pathname: '/' }} />
    }

    // authorised so return component
    return <Component {...props} />
  }} />
)

const routes = [
  // auth and account
  { path: '/login', name: 'Login', component: Login, route: Route },
  { path: '/logout', name: 'Logout', component: Logout, route: Route },
  { path: '/forget-password', name: 'Forget Password', component: ForgetPassword, route: Route },
  { path: '/register', name: 'Register', component: Register, route: Route },
  { path: '/confirm', name: 'Confirm', component: ConfirmAccount, route: Route },

  // other pages
  { path: '/dashboard', name: 'Dashboard', component: Dashboard, route: PrivateRoute, roles: ['Admin'] },
	{ path: '/dashboard2', name: 'Dashboard2', component: Dashboard2, route: PrivateRoute, roles: ['Admin'] },
	{ path: '/inbox', name: 'inbox', component: Inbox, route: PrivateRoute, roles: ['Admin'] },
	{ path: '/kanbanboard', name: 'Kanbanboard', component: KanbanBoard, route: PrivateRoute, roles: ['Admin'] },
	{ path: '/contacts', name: 'Inner', component: Contacts, route: PrivateRoute, roles: ['Admin'] },
  {
    path: "/",
    exact: true,
    component: () => <Redirect to="/dashboard" />,
    route: PrivateRoute
  },
  
]

export { routes, PrivateRoute };