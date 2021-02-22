import React from 'react';
import { Link } from 'react-router-dom';

export const Navigation = () => (
  <div>
    <ul style={listStyle}>
      <li style={elementStyle}>
        <Link to='/home' style={anchorStyle}>Home</Link>
      </li>
      <li style={elementStyle}>
        <Link to='/about' style={anchorStyle}>About</Link>
      </li>
    </ul>
  </div>
)

const listStyle = {
  listStyleType: 'none',
  backgroundColor: '#333',
  overflow: 'hidden',
  margin: 0,
  padding: 0
};

const elementStyle = {
  float: 'left'
};

const anchorStyle = {
  display: 'block',
  padding: '14px 16px',
  color: 'white',
  textAlign: 'center',
  textDecoration: 'none'
};