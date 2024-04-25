import React from 'react';
import { Image } from 'antd';
import { Link } from 'react-router-dom';
import Logo from '../../styles/Images/WhiteLogo.png';
import { colors } from '../../styles/data_vis_colors';

import { useAuth0 } from '@auth0/auth0-react'; // Importing useAuth0 hook from Auth0 React SDK
import LoginButton from './login-button'; // Importing LoginButton component
import LogoutButton from './logout-button'; // Importing LogoutButton component

const { primary_accent_color } = colors;

// Component for rendering either a login or logout button based on user authentication status
const AuthenticationButton = () => {
  // Destructuring isAuthenticated property from useAuth0 hook
  const { isAuthenticated } = useAuth0();

  // Rendering either LoginButton or LogoutButton based on user authentication status
  return isAuthenticated ? <LogoutButton /> : <LoginButton />;
};

function HeaderContent() {
  // Destructuring loginWithRedirect and isAuthenticated properties from useAuth0 hook
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        backgroundColor: primary_accent_color,
      }}
    >
      <div className="hrf-logo">
        <a href="https://www.humanrightsfirst.org/">
          <Image width={100} src={Logo} preview={false} alt="HRF logo white" />
        </a>
      </div>
      <div>
        <Link to="/" style={{ color: '#E2F0F7', paddingRight: '75px' }}>
          Home
        </Link>
        <Link to="/graphs" style={{ color: '#E2F0F7', paddingRight: '75px' }}>
          Graphs
        </Link>
        {/* Rendering elements conditionally based on user authentication status */}
        {isAuthenticated && ( // Rendering the following elements if the user is authenticated
          <Link
            to="/profile"
            style={{ color: '#E2F0F7', paddingRight: '75px' }}
          >
            Profile
          </Link>
        )}
        <button
          className="sign-up-btn"
          onClick={() => loginWithRedirect({ screen_hint: 'signup' })}
        >
          {' '}
          {/* Button for signing up */}
          Sign Up
        </button>
        <AuthenticationButton />{' '}
        {/* Rendering AuthenticationButton component */}
      </div>
    </div>
  );
}

export { HeaderContent };
