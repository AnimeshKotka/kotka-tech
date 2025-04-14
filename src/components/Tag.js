import React from 'react';

const titleColors = {
  h2: '#3a731c',
  h3: '#33A1FF', // Blue
  h4: '#33FF77', // Green
};

export default function Tag({ children, color, title }) {
  const computedColor = title ? titleColors[title] || color : color;

  return (
    <span
      style={{
        backgroundColor: computedColor,
        borderRadius: '4px',
        color: '#fff',
        padding: '0.2rem 0.5rem',
        fontWeight: 'bold',
      }}
    >
      {children}
    </span>
  );
}
