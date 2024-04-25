import React from 'react';
import { useAuth0 } from '@auth0/auth0-react'; // Importing useAuth0 hook from Auth0 React SDK

// Functional component for rendering a login button
const LoginButton = () => {
  // Destructuring loginWithRedirect function from the useAuth0 hook
  const { loginWithRedirect } = useAuth0();

  // Rendering a button that triggers loginWithRedirect function on click
  return (
    <button
      className="login-btn"
      onClick={() => loginWithRedirect()} // Triggering loginWithRedirect function on click
    >
      Log In
    </button>
  );
};

export default LoginButton;
