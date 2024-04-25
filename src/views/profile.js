import React from 'react';
import { useAuth0 } from '@auth0/auth0-react'; // Importing useAuth0 hook from Auth0 React SDK

// Component for rendering user profile information
const Profile = () => {
  // Destructuring user object from useAuth0 hook
  const { user } = useAuth0();
  // Destructuring name, picture, and email properties from user object
  const { name, picture, email } = user;

  // Rendering user profile information
  return (
    <div className="profile-header">
      <div className="mb-3">
        <img
          src={picture} // Profile picture source
          alt="Profile"
          className="profile-picture"
        />
      </div>
      <div className="profile-info">
        <h2>{name}</h2> {/* Displaying user's name */}
        <p className="lead text-muted">{email}</p>{' '}
        {/* Displaying user's email with lead text styling */}
      </div>
    </div>
  );
};

export default Profile;
