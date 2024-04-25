import React from 'react'; // Importing React library
import { Route } from 'react-router-dom'; // Importing Route component from React Router
import { withAuthenticationRequired } from '@auth0/auth0-react'; // Importing withAuthenticationRequired function from Auth0 React SDK
import Loading from '../components/common/loading'; // Importing Loading component

// Component for rendering a protected route that requires authentication
const ProtectedRoute = ({ component, ...args }) => (
  <Route
    component={withAuthenticationRequired(component, {
      onRedirecting: () => <Loading />, // Rendering Loading component while redirecting
    })}
    {...args} // Passing any additional props to the Route component
  />
);

export default ProtectedRoute;
