import React from 'react';
import { useAuth0 } from '@auth0/auth0-react'; // Importing useAuth0 hook from Auth0 React SDK

// Functional component for rendering a logout button
const LogoutButton = () => {
  // Destructuring logout function from the useAuth0 hook
  const { logout } = useAuth0();

  // Rendering a button that triggers logout function on click
  return (
    <button
      className="logout-btn"
      onClick={() =>
        logout({
          returnTo: window.location.origin, // Redirecting to the homepage after logout
        })
      }
    >
      Log Out
    </button>
  );
};

export default LogoutButton;
