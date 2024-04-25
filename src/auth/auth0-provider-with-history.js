import React from 'react';
import { useHistory } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react'; // Importing Auth0Provider component from Auth0 React SDK

// Creating a custom Auth0Provider component with history handling
const Auth0ProviderWithHistory = ({ children }) => {
  // Retrieving Auth0 domain and client ID from environment variables
  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

  // Accessing the history object from React Router
  const history = useHistory();

  // Callback function to handle redirection after authentication
  const onRedirectCallback = appState => {
    // Redirecting to the previous location or home page after authentication
    history.push(appState?.returnTo || window.location.pathname);
  };

  // Rendering Auth0Provider component with specified props
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      {children} {/* Rendering child components */}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
