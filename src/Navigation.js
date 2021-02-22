import React from 'react';
import { Link } from 'react-router-dom';

export const Navigation = () => (
  <div>
    <ul>
      <li>
        <Link path='/home'>Home</Link>
      </li>
      <li>
        <Link path='/about'>About</Link>
      </li>
    </ul>
  </div>
)