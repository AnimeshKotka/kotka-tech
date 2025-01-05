import React from 'react';

export const Profile = () => {
  return (
    <div className="profile-section">
      <img
        src="https://avatars.githubusercontent.com/u/40909527"
        alt="Profile"
        className="profile-image"
      />
      <h1 className="name">Animesh Kotka</h1>
      <p className="title">Full Stack Developer</p>
    </div>
  );
};