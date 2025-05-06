import React from 'react';

export const GitProcess = () => {
  const username = 'AnimeshKotka';
  return (
    <div className="github-container">
    <h2>GitHub Contributions</h2>
    <img
      className="github-image"
      src={`https://ghchart.rshah.org/${username}`}
      alt={`${username}'s GitHub chart`}
    />
  </div>
  );
}